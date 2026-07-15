const usgsCache = {
  "2019-03-07": { inflowPercent: 88, price: 72, note: "Bridgewater paper reference day; Linville + Pleasant Gardens proxy." },
  "2019-07-15": { inflowPercent: 64, price: 84, note: "Summer recreation season proxy with lower inflow and higher LMP." },
  "2020-02-06": { inflowPercent: 128, price: 46, note: "High-flow winter storm proxy for spill and propagation testing." },
  "2021-09-10": { inflowPercent: 52, price: 96, note: "Dry late-summer proxy for low-inflow protocol stress." },
  "2024-04-18": { inflowPercent: 104, price: 58, note: "Spring refill proxy with moderate market prices." }
};

function nearestCachedDate(date) {
  if (usgsCache[date]) return date;
  const requested = new Date(`${date}T00:00:00Z`).getTime();
  return Object.keys(usgsCache).sort((a, b) => {
    return Math.abs(new Date(`${a}T00:00:00Z`).getTime() - requested) - Math.abs(new Date(`${b}T00:00:00Z`).getTime() - requested);
  })[0];
}

async function loadUSGSBaseline(date) {
  const selected = nearestCachedDate(date);
  await new Promise((resolve) => setTimeout(resolve, 120));
  return {
    requestedDate: date,
    sourceDate: selected,
    source: "USGS Water Data mock cache",
    ...usgsCache[selected]
  };
}

window.usgsData = { loadUSGSBaseline };
