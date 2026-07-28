const USGS_DAILY_ENDPOINT = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/daily/items";
const BASIN_FLOW_GAGES = [
  { id: "USGS-02138500", label: "Linville River", role: "Headwater inflow" },
  { id: "USGS-02137727", label: "Catawba River near Pleasant Gardens", role: "Headwater inflow" },
  { id: "USGS-02138520", label: "Catawba River below Lake James", role: "Release gage" },
  { id: "USGS-02145910", label: "Catawba River below Lake Wylie", role: "Release gage" },
  { id: "USGS-02147801", label: "Lake Wateree tailrace above Camden", role: "Release gage" }
];
const DISCHARGE_PARAMETER = "00060";
const DAILY_MEAN_STATISTIC = "00003";
const HISTORICAL_REFERENCE_GAGE = "USGS-02138520";
const REFERENCE_GAGE_NOMINAL_CFS = 280;
const USGS_API_KEY = "0t44E2CY9Fz22FoMHcwLgGoFh2vSXRpBfnOjx4lV";

const fallbackCache = {
  "2019-03-07": { referenceCfs: 1710, note: "Fallback Lake James reference discharge proxy." },
  "2019-07-15": { referenceCfs: 1220, note: "Fallback summer Lake James reference discharge proxy." },
  "2020-02-06": { referenceCfs: 3110, note: "Fallback high-flow Lake James reference discharge proxy." },
  "2021-09-10": { referenceCfs: 860, note: "Fallback dry late-summer Lake James reference discharge proxy." },
  "2024-08-19": { referenceCfs: 1423, note: "Fallback Lake James reference discharge proxy for default historical date." }
};

function nextDate(date) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + 1);
  return next.toISOString().slice(0, 10);
}

function nearestFallbackDate(date) {
  if (fallbackCache[date]) return date;
  const requested = new Date(`${date}T00:00:00Z`).getTime();
  return Object.keys(fallbackCache).sort((a, b) => {
    return Math.abs(new Date(`${a}T00:00:00Z`).getTime() - requested) - Math.abs(new Date(`${b}T00:00:00Z`).getTime() - requested);
  })[0];
}

function dailyUrl(siteId, date) {
  return dailyRangeUrl(siteId, date, nextDate(date), "10");
}

function dailyRangeUrl(siteId, startDate, endDate, limit = "10000") {
  const params = new URLSearchParams({
    f: "json",
    monitoring_location_id: siteId,
    parameter_code: DISCHARGE_PARAMETER,
    statistic_id: DAILY_MEAN_STATISTIC,
    time: `${startDate}T00:00:00Z/${endDate}T00:00:00Z`,
    limit
  });
  return `${USGS_DAILY_ENDPOINT}?${params.toString()}`;
}

function dailyRequestOptions() {
  return {
    headers: {
      "X-Api-Key": USGS_API_KEY
    }
  };
}

async function fetchDailyMean(site, date) {
  const response = await fetch(dailyUrl(site.id, date), dailyRequestOptions());
  if (!response.ok) throw new Error(`USGS request failed for ${site.id}: ${response.status}`);
  const data = await response.json();
  const feature = (data.features || []).find((item) => item.properties?.time === date) || data.features?.[0];
  if (!feature) throw new Error(`No daily value returned for ${site.id} on ${date}`);
  const value = Number(feature.properties.value);
  if (!Number.isFinite(value)) throw new Error(`Invalid daily value returned for ${site.id}`);
  return {
    site: site.id,
    label: site.label,
    role: site.role,
    value,
    unit: feature.properties.unit_of_measure || "ft^3/s",
    date: feature.properties.time,
    approvalStatus: feature.properties.approval_status || "unknown"
  };
}

async function fetchDailyRange(site, startDate, endDate) {
  const response = await fetch(dailyRangeUrl(site.id, startDate, endDate), dailyRequestOptions());
  if (!response.ok) throw new Error(`USGS range request failed for ${site.id}: ${response.status}`);
  const data = await response.json();
  return (data.features || [])
    .map((feature) => {
      const value = Number(feature.properties?.value);
      if (!Number.isFinite(value)) return null;
      return {
        site: site.id,
        label: site.label,
        role: site.role,
        value,
        unit: feature.properties.unit_of_measure || "ft^3/s",
        date: feature.properties.time,
        approvalStatus: feature.properties.approval_status || "unknown"
      };
    })
    .filter((reading) => reading && reading.date >= startDate && reading.date < endDate);
}

function monthFromDate(date) {
  return Number(date.slice(5, 7));
}

function demandFromDate(date, inflowPercent) {
  const month = monthFromDate(date);
  const seasonalPeak = [6, 7, 8, 12, 1, 2].includes(month) ? 12 : 0;
  const shoulder = [3, 4, 5, 9, 10, 11].includes(month) ? 5 : 0;
  const wetCooling = inflowPercent > 150 ? -5 : 0;
  return Math.max(45, Math.min(88, Math.round(57 + seasonalPeak + shoulder + wetCooling)));
}

function referenceReading(readings) {
  return readings.find((item) => item.site === HISTORICAL_REFERENCE_GAGE && Number.isFinite(item.value));
}

function baselineFromReferenceCfs(date, referenceCfs, readings, source, note) {
  const inflowPercent = Math.max(20, Math.min(200, Math.round((referenceCfs / REFERENCE_GAGE_NOMINAL_CFS) * 100)));
  const demand = demandFromDate(date, inflowPercent);
  return {
    requestedDate: date,
    sourceDate: date,
    source,
    referenceGage: HISTORICAL_REFERENCE_GAGE,
    referenceCfs,
    totalCfs: referenceCfs,
    inflowPercent,
    demand,
    reserve: 10,
    spring: [3, 4, 5, 6].includes(monthFromDate(date)),
    price: Math.round(Math.max(20, Math.min(130, 54 + (100 - inflowPercent) * 0.55))),
    note,
    readings
  };
}

async function loadUSGSBaseline(date) {
  try {
    const settled = await Promise.allSettled(BASIN_FLOW_GAGES.map((site) => fetchDailyMean(site, date)));
    const readings = settled.filter((item) => item.status === "fulfilled").map((item) => item.value);
    if (!readings.length) throw new Error(`No USGS daily discharge values returned for ${date}`);
    const reference = referenceReading(readings);
    if (!reference) throw new Error(`Reference gage ${HISTORICAL_REFERENCE_GAGE} unavailable for ${date}`);
    const missing = settled
      .map((item, index) => (item.status === "rejected" ? BASIN_FLOW_GAGES[index].label : null))
      .filter(Boolean);
    const missingNote = missing.length ? ` Missing for selected date: ${missing.join(", ")}.` : "";
    return baselineFromReferenceCfs(
      date,
      reference.value,
      readings,
      "USGS OGC daily values API",
      `Lake James reference gage ${reference.site}: ${Math.round(reference.value)} ${reference.unit}.${missingNote}`
    );
  } catch (error) {
    const fallbackDate = nearestFallbackDate(date);
    const fallback = fallbackCache[fallbackDate];
    const baseline = baselineFromReferenceCfs(
      fallbackDate,
      fallback.referenceCfs,
      [],
      "Fallback cache after reference gage API error",
      `${fallback.note} Live request issue: ${error.message}`
    );
    baseline.requestedDate = date;
    return baseline;
  }
}

async function loadUSGSDailyRange(startDate, endDate) {
  const settled = await Promise.allSettled(BASIN_FLOW_GAGES.map((site) => fetchDailyRange(site, startDate, endDate)));
  const readingsByDate = new Map();
  settled
    .filter((item) => item.status === "fulfilled")
    .flatMap((item) => item.value)
    .forEach((reading) => {
      if (!readingsByDate.has(reading.date)) readingsByDate.set(reading.date, []);
      readingsByDate.get(reading.date).push(reading);
    });
  if (!readingsByDate.size) throw new Error(`No USGS daily discharge values returned from ${startDate} to ${endDate}`);
  return Array.from(readingsByDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, readings]) => {
      const reference = referenceReading(readings);
      if (!reference) return null;
      return baselineFromReferenceCfs(
        date,
        reference.value,
        readings,
        "USGS OGC daily values API",
        `Lake James reference gage ${reference.site}: ${Math.round(reference.value)} ${reference.unit}.`
      );
    })
    .filter(Boolean);
}

window.usgsData = {
  loadUSGSBaseline,
  loadUSGSDailyRange,
  dailyUrl,
  dailyRangeUrl,
  dailyRequestOptions,
  historicalReferenceGage: HISTORICAL_REFERENCE_GAGE,
  sites: BASIN_FLOW_GAGES
};
