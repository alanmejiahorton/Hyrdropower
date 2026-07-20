const USGS_DAILY_ENDPOINT = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/daily/items";
const BRIDGEWATER_INFLOW_GAGES = [
  { id: "USGS-02138500", label: "Linville River" },
  { id: "USGS-02137727", label: "Catawba River near Pleasant Gardens" }
];
const DISCHARGE_PARAMETER = "00060";
const DAILY_MEAN_STATISTIC = "00003";
const NOMINAL_BRIDGEWATER_INFLOW_CFS = 800;

const fallbackCache = {
  "2019-03-07": { totalCfs: 709, note: "Fallback from Bridgewater paper reference day." },
  "2019-07-15": { totalCfs: 515, note: "Fallback summer recreation season proxy." },
  "2020-02-06": { totalCfs: 1024, note: "Fallback high-flow winter storm proxy." },
  "2021-09-10": { totalCfs: 416, note: "Fallback dry late-summer proxy." },
  "2024-04-18": { totalCfs: 832, note: "Fallback spring refill proxy." }
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

async function fetchDailyMean(site, date) {
  const response = await fetch(dailyUrl(site.id, date));
  if (!response.ok) throw new Error(`USGS request failed for ${site.id}: ${response.status}`);
  const data = await response.json();
  const feature = (data.features || []).find((item) => item.properties?.time === date) || data.features?.[0];
  if (!feature) throw new Error(`No daily value returned for ${site.id} on ${date}`);
  const value = Number(feature.properties.value);
  if (!Number.isFinite(value)) throw new Error(`Invalid daily value returned for ${site.id}`);
  return {
    site: site.id,
    label: site.label,
    value,
    unit: feature.properties.unit_of_measure || "ft^3/s",
    date: feature.properties.time,
    approvalStatus: feature.properties.approval_status || "unknown"
  };
}

function baselineFromCfs(date, totalCfs, readings, source, note) {
  const inflowPercent = Math.max(35, Math.min(140, Math.round((totalCfs / NOMINAL_BRIDGEWATER_INFLOW_CFS) * 100)));
  return {
    requestedDate: date,
    sourceDate: date,
    source,
    totalCfs,
    inflowPercent,
    price: Math.round(Math.max(20, Math.min(130, 54 + (100 - inflowPercent) * 0.55))),
    note,
    readings
  };
}

async function loadUSGSBaseline(date) {
  try {
    const readings = await Promise.all(BRIDGEWATER_INFLOW_GAGES.map((site) => fetchDailyMean(site, date)));
    const totalCfs = readings.reduce((sum, item) => sum + item.value, 0);
    return baselineFromCfs(
      date,
      totalCfs,
      readings,
      "USGS OGC daily values API",
      `${readings.map((item) => `${item.label}: ${Math.round(item.value)} ${item.unit}`).join("; ")}`
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
  sites: BRIDGEWATER_INFLOW_GAGES
};
