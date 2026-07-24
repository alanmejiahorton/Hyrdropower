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
const TOTAL_BASIN_NOMINAL_CFS = 3200;
const USGS_API_KEY = "0t44E2CY9Fz22FoMHcwLgGoFh2vSXRpBfnOjx4lV";

const fallbackCache = {
  "2019-03-07": { totalCfs: 9560, note: "Fallback basin release index from Lake James and Lake Wylie gage examples." },
  "2019-07-15": { totalCfs: 3900, note: "Fallback summer recreation season basin-flow proxy." },
  "2020-02-06": { totalCfs: 14200, note: "Fallback high-flow winter storm basin-flow proxy." },
  "2021-09-10": { totalCfs: 2800, note: "Fallback dry late-summer basin-flow proxy." },
  "2024-04-18": { totalCfs: 13920, note: "Fallback spring refill proxy with Wateree tailrace data." }
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
  const params = new URLSearchParams({
    f: "json",
    monitoring_location_id: siteId,
    parameter_code: DISCHARGE_PARAMETER,
    statistic_id: DAILY_MEAN_STATISTIC,
    time: `${date}T00:00:00Z/${nextDate(date)}T00:00:00Z`,
    limit: "10"
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

function baselineFromCfs(date, totalCfs, readings, source, note) {
  const inflowPercent = Math.max(20, Math.min(200, Math.round((totalCfs / TOTAL_BASIN_NOMINAL_CFS) * 100)));
  const demand = demandFromDate(date, inflowPercent);
  return {
    requestedDate: date,
    sourceDate: date,
    source,
    totalCfs,
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
    const releaseReadings = readings.filter((item) => item.role === "Release gage");
    const indexReadings = releaseReadings.length ? releaseReadings : readings;
    const totalCfs = indexReadings.reduce((sum, item) => sum + item.value, 0);
    const missing = settled
      .map((item, index) => (item.status === "rejected" ? BASIN_FLOW_GAGES[index].label : null))
      .filter(Boolean);
    const missingNote = missing.length ? ` Missing for selected date: ${missing.join(", ")}.` : "";
    return baselineFromCfs(
      date,
      totalCfs,
      readings,
      "USGS OGC daily values API",
      `${indexReadings.length} basin release/inflow gage${indexReadings.length === 1 ? "" : "s"}: ${indexReadings.map((item) => `${item.label}: ${Math.round(item.value)} ${item.unit}`).join("; ")}.${missingNote}`
    );
  } catch (error) {
    const fallbackDate = nearestFallbackDate(date);
    const fallback = fallbackCache[fallbackDate];
    const baseline = baselineFromCfs(
      fallbackDate,
      fallback.totalCfs,
      [],
      "Fallback cache after USGS API error",
      `${fallback.note} Live request issue: ${error.message}`
    );
    baseline.requestedDate = date;
    return baseline;
  }
}

window.usgsData = {
  loadUSGSBaseline,
  dailyUrl,
  dailyRequestOptions,
  sites: BASIN_FLOW_GAGES
};
