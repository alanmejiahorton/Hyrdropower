const developments = [
  {
    id: "bridgewater",
    name: "Bridgewater",
    reservoir: "Lake James",
    state: "NC",
    capacity: 27.867,
    storage: 285000,
    usableStorage: null,
    minFlow: 66,
    continuousFlow: 25,
    target: "1192-1198 ft seasonal target; 1200 ft full pond",
    recreation: 5,
    notes: [
      "Headwater reserve used to augment downstream Rhodhiss, Oxford, and Lookout Shoals flows.",
      "Three Francis units with peak efficiency flow near 2,645 cfs.",
      "Included in the spring lake level stabilization program."
    ]
  },
  {
    id: "rhodhiss",
    name: "Rhodhiss",
    reservoir: "Lake Rhodhiss",
    state: "NC",
    capacity: 32.225,
    storage: 50000,
    usableStorage: 7097,
    minFlow: 225,
    continuousFlow: 40,
    target: "992.1 ft +/- 2 ft; 995.1 ft full pond",
    recreation: 5,
    notes: [
      "Narrow, river-like reservoir with high turnover.",
      "All flows are released through generating units before spill."
    ]
  },
  {
    id: "oxford",
    name: "Oxford",
    reservoir: "Lake Hickory",
    state: "NC",
    capacity: 35.85,
    storage: 125000,
    usableStorage: 9834,
    minFlow: 261,
    continuousFlow: 40,
    target: "932 ft +2/-0.5 ft; 935 ft full pond",
    recreation: 6,
    notes: [
      "Black-start capable generating units support station restoration and floodgate operation.",
      "Mid-sized balancing reservoir for local generation."
    ]
  },
  {
    id: "lookout",
    name: "Lookout Shoals",
    reservoir: "Lookout Shoals Lake",
    state: "NC",
    capacity: 25.715,
    storage: 25000,
    usableStorage: 2138,
    minFlow: 278,
    continuousFlow: 60,
    target: "836.1 ft +1/-1.5 ft; 838.1 ft full pool",
    recreation: 2,
    notes: [
      "Small operational pool that steps water down to Lake Norman.",
      "Continuous flow is provided by operating one small unit around the clock."
    ]
  },
  {
    id: "cowans",
    name: "Cowans Ford",
    reservoir: "Lake Norman",
    state: "NC",
    capacity: 332.5,
    storage: 1093600,
    usableStorage: 298142,
    minFlow: 311,
    continuousFlow: 80,
    target: "752-758 ft seasonal target; 760 ft full pool",
    recreation: 13,
    notes: [
      "Largest development and primary storage buffer for downstream generation and water supply.",
      "McGuire Nuclear Station cooling needs constrain drawdown.",
      "Included in the spring lake level stabilization program."
    ]
  },
  {
    id: "mountain",
    name: "Mountain Island",
    reservoir: "Mountain Island Lake",
    state: "NC",
    capacity: 55.05,
    storage: 60000,
    usableStorage: 10146,
    minFlow: 314,
    continuousFlow: 80,
    target: "644.5 ft +2.5/-1 ft; 647.5 ft full pool",
    recreation: 2,
    notes: [
      "Immediate drinking-water pool for the Charlotte region.",
      "Often starts generation in anticipation of Cowans Ford releases to avoid spillage."
    ]
  },
  {
    id: "wylie",
    name: "Wylie",
    reservoir: "Lake Wylie",
    state: "NC/SC",
    capacity: 69,
    storage: 280000,
    usableStorage: 40145,
    minFlow: 411,
    continuousFlow: null,
    target: "566.4 ft +/- 2 ft; 569.4 ft full pool",
    recreation: 10,
    notes: [
      "Supports Catawba Nuclear Station, Allen Steam Station, and downstream industrial users.",
      "Voluntary daily generation supports approximately 700 cfs for downstream industrial water users.",
      "Black-start capable; included in spring stabilization."
    ]
  },
  {
    id: "fishing",
    name: "Fishing Creek",
    reservoir: "Fishing Creek Reservoir",
    state: "SC",
    capacity: 48.12,
    storage: 35000,
    usableStorage: 11159,
    minFlow: 440,
    continuousFlow: null,
    target: "414.2 ft +/- 2 ft; 417.2 ft full pool",
    recreation: 2,
    notes: [
      "Generation is limited during five-unit operation to reduce downstream spill at Great Falls-Dearborn.",
      "Black-start capable."
    ]
  },
  {
    id: "greatfalls",
    name: "Great Falls / Dearborn",
    reservoir: "Great Falls Reservoir",
    state: "SC",
    capacity: 42,
    storage: 15000,
    usableStorage: 1966,
    minFlow: 444,
    continuousFlow: null,
    target: "353.3 ft +2/-3.5 ft; 355.8 ft full pool",
    recreation: 0,
    notes: [
      "Specialized diversion and bypass-reach layout with separate Great Falls and Dearborn powerhouses.",
      "Dearborn units are dispatched before Great Falls units because they are more efficient.",
      "The 24 MW Great Falls powerhouse capacity is tracked as inoperable and excluded from authorized project capacity."
    ]
  },
  {
    id: "rocky",
    name: "Rocky Creek / Cedar Creek",
    reservoir: "Cedar Creek Reservoir",
    state: "SC",
    capacity: 68.775,
    storage: 20000,
    usableStorage: 2190,
    minFlow: 445,
    continuousFlow: null,
    target: "281.9 ft +2/-1 ft; 284.8 ft maximum full pool",
    recreation: 2,
    notes: [
      "Shared operational pool handling rapid high-volume releases from Great Falls layouts.",
      "Cedar Creek turbines include aeration equipment."
    ]
  },
  {
    id: "wateree",
    name: "Wateree",
    reservoir: "Lake Wateree",
    state: "SC",
    capacity: 82,
    storage: 310000,
    usableStorage: 65568,
    minFlow: 446,
    continuousFlow: 200,
    target: "220.5-222.5 ft seasonal target +/- 2 ft; 225.5 ft full pool",
    recreation: 8,
    notes: [
      "Final large buffer before the lower Wateree River.",
      "Fishway prescription covers American shad, blueback herring, and American eel passage.",
      "Included in the spring lake level stabilization program."
    ]
  }
];

const totalCapacity = developments.reduce((sum, d) => sum + d.capacity, 0);
const totalStorage = developments.reduce((sum, d) => sum + d.storage, 0);
const maxStationCapacity = Math.max(...developments.map((d) => d.capacity));
const mapPositions = {
  bridgewater: { x: 145, y: 180, labelX: -18, labelY: 50, reservoirWidth: 72, reservoirHeight: 22, angle: -8 },
  rhodhiss: { x: 285, y: 160, labelX: -8, labelY: -28, reservoirWidth: 58, reservoirHeight: 15, angle: 2 },
  oxford: { x: 430, y: 175, labelX: -18, labelY: -26, reservoirWidth: 68, reservoirHeight: 18, angle: 4 },
  lookout: { x: 545, y: 146, labelX: 20, labelY: -25, reservoirWidth: 54, reservoirHeight: 15, angle: -18 },
  cowans: { x: 640, y: 270, labelX: -76, labelY: -10, reservoirWidth: 118, reservoirHeight: 76, angle: -18 },
  mountain: { x: 628, y: 365, labelX: -106, labelY: 0, reservoirWidth: 42, reservoirHeight: 15, angle: 82 },
  wylie: { x: 600, y: 500, labelX: -64, labelY: -10, reservoirWidth: 86, reservoirHeight: 54, angle: -35 },
  fishing: { x: 628, y: 660, labelX: -36, labelY: -18, reservoirWidth: 36, reservoirHeight: 13, angle: 82 },
  greatfalls: { x: 652, y: 704, labelX: -82, labelY: -2, reservoirWidth: 46, reservoirHeight: 16, angle: 18 },
  rocky: { x: 738, y: 770, labelX: 20, labelY: -6, reservoirWidth: 82, reservoirHeight: 42, angle: -18 },
  wateree: { x: 730, y: 850, labelX: -8, labelY: 54, reservoirWidth: 122, reservoirHeight: 46, angle: -6 }
};

const releaseMultipliers = Object.fromEntries(developments.map((d) => [d.id, 100]));
const mapState = { scale: .6, x: 175, y: 0, dragging: false, startX: 0, startY: 0, originX: 0, originY: 0 };
const SPRING_STABILIZATION_PENALTY_RATIO = 0.07;
const SPRING_STABILIZATION_PENALTY_POINTS = SPRING_STABILIZATION_PENALTY_RATIO * 100;

const controls = {
  customMode: document.querySelector("#custom-mode"),
  usgsDate: document.querySelector("#usgs-date"),
  inflow: document.querySelector("#inflow"),
  demand: document.querySelector("#demand"),
  price: document.querySelector("#price"),
  reserve: document.querySelector("#reserve"),
  outage: document.querySelector("#outage"),
  spring: document.querySelector("#spring-stabilization")
};

const graphControls = {
  start: document.querySelector("#graph-start"),
  end: document.querySelector("#graph-end"),
  build: document.querySelector("#build-history-graph"),
  status: document.querySelector("#graph-maker-status"),
  chart: document.querySelector("#history-dispatch-chart"),
  downsample: document.querySelector("#graph-downsample"),
  play: document.querySelector("#play-history"),
  step: document.querySelector("#step-history")
};

const selected = {
  id: null
};

let usgsBaseline = null;
let playbackTimer = null;
const historyRangeCache = new Map();

const statusDefinitions = {
  Normal: "Operating within modeled dispatch, release, storage, and compliance guardrails.",
  Stabilize: "Spring reservoir level stabilization is active for this reservoir, limiting discretionary fluctuation.",
  Watch: "Low-inflow watch condition: minimum-flow commitments are becoming tight relative to modeled release.",
  "Spill risk": "High-flow condition in a small operational pool where water may bypass turbines and reduce generation value.",
  Drawdown: "Custom release schedule is high enough to draw down a small operational pool faster than nominal operation.",
  "Below min": "Scheduled release falls below the modeled daily minimum flow target.",
  Outage: "Forced outage removes this development from available generating capacity."
};

const signalPriority = { alert: 0, warning: 1, normal: 2 };

const metricHelp = {
  capacity: {
    title: "Total Capacity",
    equation: "Total capacity (MW) = sum(authorized capacity MW for modeled developments)",
    description: "This is the licensed installed capacity basis used by the app. The inoperable 24 MW Great Falls capacity is excluded, matching the project capacity treatment in the FERC order."
  },
  dispatch: {
    title: "Simulated Dispatch",
    equation: "Simulated dispatch (MW) = sum(min(capacity MW, capacity MW x weightedDispatch x localFlow x storageDispatch))",
    description: "Historical mode uses the Lake James reference discharge gage and storage-weighted peaking logic so large reservoirs are not throttled by changing downstream gage availability. Manual mode still applies individual release schedules."
  },
  storage: {
    title: "Usable Storage",
    equation: "Usable storage (%) = clamp(47 + 0.43 x inflow % - 0.12 x demand % - springStabilizationPenaltyPoints, 31, 99)",
    description: "This planning proxy estimates system storage pressure from hydrologic supply, demand draw, and spring stabilization constraints, then weights the acre-foot display by total reservoir scale."
  },
  waterValue: {
    title: "Hydropower Value",
    equation: "Hydropower value ($/MWh) = max(8, market price $/MWh x (1.35 - storage% / 130) + 0.12 x demand % + droughtPremium $/MWh)",
    description: "This approximates the dispatch value of stored water. Scarcer storage and higher demand raise the value of holding or carefully dispatching water."
  }
};

function fmt(value, digits = 0) {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  });
}

function addDays(date, days) {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString().slice(0, 10);
}

function daysBetween(startDate, endDate) {
  return Math.round((new Date(`${endDate}T00:00:00Z`) - new Date(`${startDate}T00:00:00Z`)) / 86400000);
}

function clampDate(date, min, max) {
  if (date < min) return min;
  if (date > max) return max;
  return date;
}

function monthKey(date) {
  return date.slice(0, 7);
}

function monthStart(key) {
  return `${key}-01`;
}

function addMonths(key, months) {
  const date = new Date(`${key}-01T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() + months);
  return date.toISOString().slice(0, 7);
}

function ceilTo25(value) {
  return Math.max(25, Math.ceil(value / 25) * 25);
}

function tickStep25(maxValue, targetTicks = 8) {
  return Math.max(25, Math.ceil(maxValue / Math.max(1, targetTicks) / 25) * 25);
}

function optionLabel(d) {
  return `${d.name} (${fmt(d.capacity, d.capacity % 1 ? 1 : 0)} MW)`;
}

function seedOutageOptions() {
  developments.forEach((d) => {
    const option = document.createElement("option");
    option.value = d.id;
    option.textContent = optionLabel(d);
    controls.outage.appendChild(option);
  });
}

function seedReleaseControls() {
  const container = document.querySelector("#release-controls");
  container.innerHTML = "";
  developments.forEach((d) => {
    const item = document.createElement("label");
    item.className = "release-control";
    item.setAttribute("for", `release-${d.id}`);
    item.innerHTML = `
      <span>
        <strong>${d.reservoir}</strong>
        <small>${d.name} / min ${fmt(d.minFlow)} cfs</small>
      </span>
      <input id="release-${d.id}" type="range" min="50" max="160" value="${releaseMultipliers[d.id]}" data-id="${d.id}">
      <output id="release-label-${d.id}">${releaseMultipliers[d.id]}%</output>
    `;
    container.appendChild(item);
  });

  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      releaseMultipliers[event.target.dataset.id] = Number(event.target.value);
      render();
    });
  });
}

function springStoragePenaltyPercent(spring) {
  return spring ? SPRING_STABILIZATION_PENALTY_POINTS : 0;
}

function releaseCfsPerMw(d) {
  if (d.state === "NC") return 20;
  if (d.state === "NC/SC") return 17;
  return 14;
}

function localFlowByDevelopmentState(d) {
  if (d.state === "NC") return 1.02;
  if (d.state === "NC/SC") return 0.98;
  return 0.94;
}

function scenarioState({ historical, inflow, demand, price, reserve, spring, outage }) {
  const droughtPenalty = inflow < 55 ? (55 - inflow) * 0.003 : 0;
  const wetSpillPenalty = inflow > 112 ? (inflow - 112) * 0.003 : 0;
  const stabilizationPenalty = spring ? SPRING_STABILIZATION_PENALTY_RATIO : 0;
  const reservePenalty = (reserve / 100) * 0.45;
  const waterAvailability = Math.max(0.35, Math.min(1.6, 0.62 + inflow / 120 - droughtPenalty - stabilizationPenalty));
  const demandPull = Math.max(0.35, Math.min(1.08, demand / 100 + price / 420));
  const baseDispatch = waterAvailability * 0.72 + demandPull * 0.28;
  const dispatchFactor = Math.max(0.25, Math.min(1.06, baseDispatch - reservePenalty - wetSpillPenalty * 0.12));
  const storagePercent = Math.max(31, Math.min(99, 47 + inflow * 0.43 - demand * 0.12 - springStoragePenaltyPercent(spring)));
  const waterValue = Math.max(8, price * (1.35 - storagePercent / 130) + demand * 0.12 + Math.max(0, 70 - inflow) * 0.7);

  return {
    historical,
    inflow,
    demand,
    price,
    reserve,
    spring,
    waterAvailability,
    dispatchFactor,
    storagePercent,
    waterValue,
    outage
  };
}

function scenario() {
  const historical = !controls.customMode.checked && usgsBaseline;
  return scenarioState({
    historical,
    inflow: historical ? usgsBaseline.inflowPercent : Number(controls.inflow.value),
    demand: historical ? usgsBaseline.demand : Number(controls.demand.value),
    price: historical ? usgsBaseline.price : Number(controls.price.value),
    reserve: historical ? usgsBaseline.reserve : Number(controls.reserve.value),
    spring: historical ? usgsBaseline.spring : controls.spring.checked,
    outage: historical ? "none" : controls.outage.value
  });
}

function scenarioFromBaseline(baseline) {
  return scenarioState({
    historical: true,
    inflow: baseline.inflowPercent,
    demand: baseline.demand,
    price: baseline.price,
    reserve: baseline.reserve,
    spring: baseline.spring,
    outage: "none"
  });
}

function stationRows(state) {
  let availableCapacity = 0;
  const rows = developments.map((d) => {
    const out = state.outage === d.id;
    const releaseMultiplier = state.historical ? 1 : releaseMultipliers[d.id] / 100;
    const upstreamStorageWeight = d.storage / totalStorage;
    const storagePeakingStations = ["bridgewater", "cowans", "wylie", "wateree"];
    const storageDispatch = storagePeakingStations.includes(d.id) && state.storagePercent > 38 ? 1 : 0.88;
    const localFlow = Math.max(0.42, Math.min(1.28, (state.waterAvailability * 0.82 + upstreamStorageWeight * 1.05) * localFlowByDevelopmentState(d)));
    const scheduleEffect = Math.max(0.5, Math.min(1.35, releaseMultiplier));
    const dispatch = out ? 0 : Math.min(d.capacity, d.capacity * state.dispatchFactor * localFlow * storageDispatch * (0.72 + scheduleEffect * 0.28));
    const baseRelease = d.minFlow + dispatch * releaseCfsPerMw(d) + Math.max(0, state.inflow - 100) * 8;
    const release = Math.round(Math.max(d.minFlow * 0.85, baseRelease * releaseMultiplier));
    availableCapacity += out ? 0 : d.capacity;

    let status = "Normal";
    if (out) status = "Outage";
    else if (release < d.minFlow) status = "Below min";
    else if (state.inflow < 55 && d.minFlow > release * 0.72) status = "Watch";
    else if (state.inflow > 118 && d.usableStorage && d.usableStorage < 3000) status = "Spill risk";
    else if (releaseMultiplier > 1.35 && d.usableStorage && d.usableStorage < 12000) status = "Drawdown";
    else if (state.spring && ["bridgewater", "cowans", "wylie", "wateree"].includes(d.id)) status = "Stabilize";

    return { ...d, dispatch, release, releaseMultiplier, status };
  });

  return { rows, availableCapacity };
}

function reservoirPath(d) {
  const rx = d.reservoirWidth;
  const ry = d.reservoirHeight;
  const points = [
    [-rx, -ry * 0.12],
    [-rx * 0.64, -ry * 0.72],
    [-rx * 0.18, -ry * 0.48],
    [rx * 0.16, -ry],
    [rx * 0.52, -ry * 0.44],
    [rx, -ry * 0.16],
    [rx * 0.58, ry * 0.34],
    [rx * 0.18, ry],
    [-rx * 0.24, ry * 0.52],
    [-rx * 0.66, ry * 0.78]
  ];
  return points.map(([x, y], index) => `${index ? "L" : "M"} ${(d.x + x).toFixed(1)} ${(d.y + y).toFixed(1)}`).join(" ") + " Z";
}

function drawTopology(rows) {
  const svg = document.querySelector("#topology");
  svg.innerHTML = "";

  const positions = rows.map((d) => ({ ...d, ...mapPositions[d.id] }));

  const ns = "http://www.w3.org/2000/svg";
  const viewport = document.createElementNS(ns, "g");
  viewport.setAttribute("class", "map-viewport");
  viewport.setAttribute("transform", `translate(${mapState.x} ${mapState.y}) scale(${mapState.scale})`);
  svg.appendChild(viewport);

  const basemap = document.createElementNS(ns, "image");
  basemap.setAttribute("class", "map-basemap");
  basemap.setAttribute("href", "NCSC-cropped.svg");
  basemap.setAttribute("x", "-600");
  basemap.setAttribute("y", "-175");
  basemap.setAttribute("width", "2880");
  basemap.setAttribute("height", "1860");
  basemap.setAttribute("preserveAspectRatio", "xMidYMid meet");
  viewport.appendChild(basemap);

  const group = document.createElementNS(ns, "g");
  group.setAttribute("transform", "translate(0 0)");
  viewport.appendChild(group);

  /*
  const basin = document.createElementNS(ns, "path");
  basin.setAttribute("class", "basin-shape");
  basin.setAttribute("d", "M264 112 L316 126 L366 156 L408 204 L446 274 L466 350 L486 418 L508 480 L558 556 L622 596 L592 614 L528 560 L494 492 L468 424 L448 350 L422 282 L386 218 L346 166 L296 138 Z");
  group.appendChild(basin);
  */

  const riverPath = positions.map((p, index) => `${index ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
  const river = document.createElementNS(ns, "path");
  river.setAttribute("class", "river-main");
  river.setAttribute("d", riverPath);
  group.appendChild(river);

  positions.slice(0, -1).forEach((from, i) => {
    const to = positions[i + 1];
    const path = `M ${from.x} ${from.y} C ${(from.x + to.x) / 2} ${from.y + 18}, ${(from.x + to.x) / 2} ${to.y - 18}, ${to.x} ${to.y}`;
    const link = document.createElementNS(ns, "path");
    link.setAttribute("class", "flow-link");
    link.setAttribute("d", path);
    link.setAttribute("stroke-width", Math.max(2, Math.min(8, from.release / 900)).toFixed(2));
    group.appendChild(link);
  });

  positions.forEach((d) => {
    const reservoir = document.createElementNS(ns, "ellipse");
    reservoir.setAttribute("class", "reservoir-shape");
    reservoir.setAttribute("cx", d.x);
    reservoir.setAttribute("cy", d.y);
    reservoir.setAttribute("rx", d.reservoirWidth);
    reservoir.setAttribute("ry", d.reservoirHeight);
    reservoir.setAttribute("transform", `rotate(${d.angle} ${d.x} ${d.y})`);
    reservoir.addEventListener("click", () => selectDevelopment(d.id));
    group.appendChild(reservoir);

    const node = document.createElementNS(ns, "g");
    node.setAttribute("class", `node${selected.id === d.id ? " selected" : ""}`);
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", `${d.name}, ${d.reservoir}`);
    node.setAttribute("transform", `translate(${d.x} ${d.y})`);
    node.addEventListener("click", () => selectDevelopment(d.id));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectDevelopment(d.id);
      }
    });

    const visibleRadius = Math.max(8, Math.min(18, 7 + (d.capacity / maxStationCapacity) * 15));
    const capacityRadius = 12 + (d.releaseMultiplier - 0.5) * 11;

    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("r", visibleRadius.toFixed(1));
    node.appendChild(circle);

    const ring = document.createElementNS(ns, "circle");
    ring.setAttribute("class", "storage-ring");
    ring.setAttribute("r", capacityRadius.toFixed(1));
    node.appendChild(ring);

    const label = document.createElementNS(ns, "text");
    label.setAttribute("x", d.labelX - 30);
    label.setAttribute("y", d.labelY);
    label.textContent = d.reservoir.replace("Lake ", "").replace(" Reservoir", "");
    node.appendChild(label);

    const sub = document.createElementNS(ns, "text");
    sub.setAttribute("class", "subtext");
    sub.setAttribute("x", d.labelX - 30);
    sub.setAttribute("y", d.labelY + 25);
    sub.textContent = `${fmt(d.release)} cfs`;
    node.appendChild(sub);

    group.appendChild(node);
  });

  const hud = document.createElementNS(ns, "g");
  hud.setAttribute("class", "map-hud");
  svg.appendChild(hud);

  const scaleMiles = Math.max(10, (21 / mapState.scale / 5) * 5);
  const scale = document.createElementNS(ns, "g");
  scale.setAttribute("class", "map-scale");
  scale.setAttribute("transform", "translate(780 570)");
  scale.innerHTML = `
    <line x1="0" y1="0" x2="120" y2="0"></line>
    <line x1="0" y1="-7" x2="0" y2="7"></line>
    <line x1="60" y1="-5" x2="60" y2="5"></line>
    <line x1="120" y1="-7" x2="120" y2="7"></line>
    <text x="0" y="24">0</text>
    <text x="48" y="24">${fmt(scaleMiles / 2)}</text>
    <text x="95" y="24">${fmt(scaleMiles)} mi</text>
  `;
  hud.appendChild(scale);

  const north = document.createElementNS(ns, "g");
  north.setAttribute("class", "north-arrow");
  north.setAttribute("transform", "translate(890 82)");
  north.innerHTML = `<path d="M0 -32 L12 20 L0 12 L-12 20 Z"></path><text x="-5" y="-42">N</text>`;
  hud.appendChild(north);
}

function updateDetails(rows) {
  const target = selected.id ? rows.find((d) => d.id === selected.id) : null;
  const detailName = document.querySelector("#detail-name");
  const detailSummary = document.querySelector("#detail-summary");
  const detailReservoir = document.querySelector("#detail-reservoir");
  const detailCapacity = document.querySelector("#detail-capacity");
  const detailStorage = document.querySelector("#detail-storage");
  const detailFlow = document.querySelector("#detail-flow");
  const detailBar = document.querySelector("#detail-storage-bar");
  const notes = document.querySelector("#detail-notes");
  notes.innerHTML = "";

  if (!target) {
    detailName.textContent = "System Overview";
    detailSummary.textContent = "The cascade is modeled as coordinated storage and releases: upstream water availability shapes downstream generation, minimum flows, spillage risk, and hydropower value.";
    detailReservoir.textContent = "11 reservoirs";
    detailCapacity.textContent = `${fmt(totalCapacity, 1)} MW`;
    detailStorage.textContent = `${fmt(totalStorage)} acre-ft scale`;
    detailFlow.textContent = "Daily minimum releases monitored";
    detailBar.style.width = "100%";
    [
      "Lake Norman dominates storage scale and provides the main downstream safety buffer.",
      "Hydropower dispatch is flexible, so reserve holdback can reduce immediate generation while preserving ancillary-service capability.",
      "Drought scenarios raise hydropower value and tighten minimum-flow watch conditions."
    ].forEach(addNote);
    return;
  }

  detailName.textContent = target.name;
  detailSummary.textContent = `${target.reservoir} is a ${target.state} development with ${target.target}.`;
  detailReservoir.textContent = target.reservoir;
  detailCapacity.textContent = `${fmt(target.capacity, 2)} MW`;
  detailStorage.textContent = `${fmt(target.storage)} acre-ft scale`;
  detailFlow.textContent = `${fmt(target.minFlow)} cfs daily minimum${target.continuousFlow ? ` / ${fmt(target.continuousFlow)} cfs continuous` : ""}`;
  detailBar.style.width = `${Math.max(4, (target.storage / totalStorage) * 100)}%`;
  target.notes.forEach(addNote);
  addNote(`${target.recreation} licensed recreation site${target.recreation === 1 ? "" : "s"} in the FERC project description.`);

  function addNote(text) {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = text;
    notes.appendChild(note);
  }
}

function addNote(text) {
  const note = document.createElement("div");
  note.className = "note";
  note.textContent = text;
  document.querySelector("#detail-notes").appendChild(note);
}

function renderDispatch(rows) {
  const body = document.querySelector("#dispatch-body");
  body.innerHTML = "";

  rows.forEach((d) => {
    const tr = document.createElement("tr");
    const statusClass = d.status === "Outage" || d.status === "Below min" ? "alert" : ["Watch", "Spill risk", "Drawdown"].includes(d.status) ? "warn" : "";
    tr.innerHTML = `
      <td><button class="table-link" data-id="${d.id}">${d.name}</button></td>
      <td>${d.reservoir}</td>
      <td>${fmt(d.dispatch, 1)} MW / ${fmt((d.dispatch / d.capacity) * 100)}%</td>
      <td>${fmt(d.release)} cfs / ${fmt(d.releaseMultiplier * 100)}%</td>
      <td><button class="status-pill ${statusClass}" data-status="${d.status}" type="button">${d.status}</button></td>
    `;
    body.appendChild(tr);
  });

  body.querySelectorAll("button").forEach((button) => {
    if (button.dataset.id) button.addEventListener("click", () => selectDevelopment(button.dataset.id, true));
    if (button.dataset.status) button.addEventListener("click", () => showStatusDefinition(button.dataset.status));
  });
}

function showStatusDefinition(status) {
  const box = document.querySelector("#status-info");
  box.innerHTML = `<strong>${status}</strong>: ${statusDefinitions[status] || "No definition available for this status."}`;
}

function showMetricHelp(key) {
  const info = metricHelp[key];
  const panel = document.querySelector("#metric-info-panel");
  if (!info || !panel) return;
  panel.innerHTML = `<strong>${info.title}</strong><code>${info.equation}</code><span>${info.description}</span>`;
}

function setHistoricalControlState() {
  const historical = !controls.customMode.checked;
  controls.usgsDate.disabled = !historical;
  [controls.inflow, controls.demand, controls.price, controls.reserve, controls.outage, controls.spring].forEach((control) => {
    control.disabled = historical;
  });
  document.querySelectorAll("#release-controls input").forEach((input) => {
    input.disabled = historical;
  });
  document.querySelector("#reset-releases").disabled = historical;
  document.querySelector(".scenario")?.classList.toggle("historical-active", historical);
  document.querySelector(".scenario")?.classList.toggle("custom-active", !historical);
  document.querySelector(".release-schedule")?.setAttribute("aria-disabled", String(historical));
  document.querySelector(".graph-maker")?.classList.toggle("is-hidden", !historical);
  graphControls.play.disabled = !historical;
  graphControls.step.disabled = !historical;
  graphControls.start.disabled = !historical;
  graphControls.end.disabled = !historical;
  graphControls.downsample.disabled = !historical;
  graphControls.build.disabled = !historical;
  if (!historical) stopHistoryPlayback();
}

function updateReleaseLabels(rows) {
  rows.forEach((d) => {
    const input = document.querySelector(`#release-${d.id}`);
    const label = document.querySelector(`#release-label-${d.id}`);
    if (input && Number(input.value) !== releaseMultipliers[d.id]) input.value = releaseMultipliers[d.id];
    if (label) {
      const schedule = !controls.customMode.checked ? "USGS" : `${fmt(releaseMultipliers[d.id])}%`;
      label.textContent = `${schedule} / ${fmt(d.release)} cfs`;
    }
  });
}

function renderCompliance(state, rows, availableCapacity) {
  const list = document.querySelector("#compliance-list");
  list.innerHTML = "";

  const signals = [
    {
      label: "Inflow",
      level: state.inflow < 55 ? "alert" : state.inflow < 70 ? "warning" : "normal",
      text: state.inflow < 55
        ? "Low Inflow Protocol watch: scenario inflows are below 55% of normal."
        : "Minimum-flow releases are represented for each development."
    },
    {
      label: "Spring stabilization",
      level: state.spring ? "warning" : "normal",
      infoKey: "spring",
      text: state.spring
        ? "Spring stabilization active for Lake Wateree, Wylie, Norman, and James."
        : "Spring stabilization disabled; reservoirs can fluctuate more freely in the model."
    },
    {
      label: "Availability",
      level: availableCapacity < totalCapacity ? "warning" : "normal",
      text: availableCapacity < totalCapacity
        ? `Forced outage reduces available capacity to ${fmt(availableCapacity, 1)} MW.`
        : "All modeled powerhouses are available."
    },
    {
      label: "Spillage",
      level: rows.some((d) => d.status === "Spill risk") ? "warning" : "normal",
      text: rows.some((d) => d.status === "Spill risk")
        ? "High-flow scenario flags small downstream pools for spillage tracking."
        : "No small-pool spill risk is currently flagged."
    },
    {
      label: "Release schedule",
      level: rows.some((d) => d.status === "Below min") ? "alert" : rows.some((d) => d.status === "Drawdown") ? "warning" : "normal",
      text: rows.some((d) => d.status === "Below min")
        ? "At least one custom release schedule is below the modeled daily minimum flow target."
        : rows.some((d) => d.status === "Drawdown")
          ? "High custom releases are drawing down a small operational pool."
          : "Individual release schedules are within modeled guardrails."
    },
    {
      label: "Environmental compliance",
      level: "normal",
      text: "Fishway prescriptions and water-quality monitoring are tracked as compliance obligations, not optimized here."
    }
  ];

  signals.sort((a, b) => signalPriority[a.level] - signalPriority[b.level]).forEach((signal) => {
    const div = document.createElement("div");
    div.className = `signal ${signal.level}`;
    const panel = document.querySelector("#spring-info-panel");
    const expanded = signal.infoKey === "spring" && panel && !panel.classList.contains("is-hidden");
    const infoButton = signal.infoKey
      ? `<button class="signal-info-button" type="button" aria-expanded="${expanded}" aria-controls="spring-info-panel" data-signal-info="${signal.infoKey}" aria-label="Show spring level stabilization information">i</button>`
      : "";
    div.innerHTML = `<strong>${signal.label}${infoButton}</strong><span>${signal.text}</span>`;
    list.appendChild(div);
  });

  list.querySelectorAll("[data-signal-info='spring']").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.querySelector("#spring-info-panel");
      const isHidden = panel.classList.toggle("is-hidden");
      button.setAttribute("aria-expanded", String(!isHidden));
    });
  });
}

function drawWaterValueChart(state) {
  const svg = document.querySelector("#water-value-chart");
  svg.innerHTML = "";
  const ns = "http://www.w3.org/2000/svg";
  const width = 960;
  const height = 300;
  const pad = 56;
  const points = Array.from({ length: 21 }, (_, i) => {
    const storage = i * 5;
    const value = Math.max(8, state.price * (1.35 - storage / 130) + state.demand * 0.12 + Math.max(0, 70 - state.inflow) * 0.7);
    return { storage, value };
  });
  const maxValue = ceilTo25(Math.max(...points.map((p) => p.value)) * 1.08);
  const x = (storage) => pad + (storage / 100) * (width - pad * 2);
  const y = (value) => height - pad - (value / maxValue) * (height - pad * 2);
  const line = points.map((p, i) => `${i ? "L" : "M"} ${x(p.storage)} ${y(p.value)}`).join(" ");
  const area = `${line} L ${x(100)} ${height - pad} L ${x(0)} ${height - pad} Z`;

  const axisX = document.createElementNS(ns, "line");
  axisX.setAttribute("class", "chart-axis");
  axisX.setAttribute("x1", pad);
  axisX.setAttribute("y1", height - pad);
  axisX.setAttribute("x2", width - pad);
  axisX.setAttribute("y2", height - pad);
  svg.appendChild(axisX);

  const axisY = document.createElementNS(ns, "line");
  axisY.setAttribute("class", "chart-axis");
  axisY.setAttribute("x1", pad);
  axisY.setAttribute("y1", pad);
  axisY.setAttribute("x2", pad);
  axisY.setAttribute("y2", height - pad);
  svg.appendChild(axisY);

  [0, 20, 40, 60, 80, 100].forEach((tick) => {
    const tickLine = document.createElementNS(ns, "line");
    tickLine.setAttribute("class", "chart-tick");
    tickLine.setAttribute("x1", x(tick));
    tickLine.setAttribute("y1", height - pad);
    tickLine.setAttribute("x2", x(tick));
    tickLine.setAttribute("y2", height - pad + 6);
    svg.appendChild(tickLine);

    const tickText = document.createElementNS(ns, "text");
    tickText.setAttribute("class", "chart-label");
    tickText.setAttribute("x", x(tick) - 9);
    tickText.setAttribute("y", height - pad + 20);
    tickText.textContent = `${tick}%`;
    svg.appendChild(tickText);
  });

  const valueStep = tickStep25(maxValue, 6);
  for (let value = valueStep; value <= maxValue; value += valueStep) {
    const tickY = y(value);
    const tickLine = document.createElementNS(ns, "line");
    tickLine.setAttribute("class", "chart-tick");
    tickLine.setAttribute("x1", pad - 6);
    tickLine.setAttribute("y1", tickY);
    tickLine.setAttribute("x2", pad);
    tickLine.setAttribute("y2", tickY);
    svg.appendChild(tickLine);

    const tickText = document.createElementNS(ns, "text");
    tickText.setAttribute("class", "chart-label");
    tickText.setAttribute("x", 4);
    tickText.setAttribute("y", tickY + 4);
    tickText.textContent = `$${fmt(value)}`;
    svg.appendChild(tickText);
  }

  const areaPath = document.createElementNS(ns, "path");
  areaPath.setAttribute("class", "chart-area");
  areaPath.setAttribute("d", area);
  svg.appendChild(areaPath);

  const path = document.createElementNS(ns, "path");
  path.setAttribute("class", "chart-line");
  path.setAttribute("d", line);
  svg.appendChild(path);

  const current = { storage: Math.max(35, Math.min(95, state.storagePercent)), value: state.waterValue };
  const dot = document.createElementNS(ns, "circle");
  dot.setAttribute("class", "chart-dot");
  dot.setAttribute("cx", x(current.storage));
  dot.setAttribute("cy", y(current.value));
  dot.setAttribute("r", 7);
  svg.appendChild(dot);

  [
    { text: "Storage inventory (% usable)", x: width / 2 - 78, y: height - 8 },
    { text: "Hydropower value ($/MWh)", x: 10, y: 22 },
    { text: `$${fmt(state.waterValue)}/MWh`, x: x(current.storage) + 12, y: y(current.value) - 10 }
  ].forEach((label) => {
    const text = document.createElementNS(ns, "text");
    text.setAttribute("class", "chart-label");
    text.setAttribute("x", label.x);
    text.setAttribute("y", label.y);
    text.textContent = label.text;
    svg.appendChild(text);
  });
}

function stopHistoryPlayback() {
  if (playbackTimer) {
    clearInterval(playbackTimer);
    playbackTimer = null;
  }
  if (graphControls.play) graphControls.play.textContent = "Play Dates";
}

async function stepHistoryDate() {
  if (controls.customMode.checked) return;
  const min = controls.usgsDate.min || "2009-01-01";
  const max = controls.usgsDate.max || "2026-12-31";
  const next = addDays(controls.usgsDate.value || min, 1);
  controls.usgsDate.value = clampDate(next > max ? min : next, min, max);
  await refreshUSGSBaseline();
}

function toggleHistoryPlayback() {
  if (playbackTimer) {
    stopHistoryPlayback();
    return;
  }
  graphControls.play.textContent = "Pause Dates";
  playbackTimer = setInterval(() => {
    stepHistoryDate();
  }, 1100);
}

function normalizeGraphMonths() {
  const min = "2009-01";
  const max = "2026-12";
  let start = graphControls.start.value || "2024-08";
  let end = graphControls.end.value || start;
  if (start < min) start = min;
  if (end > max) end = max;
  if (start > end) [start, end] = [end, start];
  graphControls.start.value = start;
  graphControls.end.value = end;
  return { start, end };
}

function rangeEndDate(month) {
  return monthStart(addMonths(month, 1));
}

function graphBucketKey(date, mode) {
  return mode === "year" ? date.slice(0, 4) : date.slice(0, 7);
}

function downsampleDispatch(dailyPoints, mode) {
  const buckets = new Map();
  dailyPoints.forEach((point) => {
    const key = graphBucketKey(point.date, mode);
    if (!buckets.has(key)) buckets.set(key, { label: key, dispatchSum: 0, count: 0 });
    const bucket = buckets.get(key);
    bucket.dispatchSum += point.dispatch;
    bucket.count += 1;
  });
  return Array.from(buckets.values()).map((bucket) => ({
    month: bucket.label,
    dispatch: bucket.dispatchSum / Math.max(1, bucket.count),
    count: bucket.count
  }));
}

function weeklyAverageDispatch(dailyPoints, startDate) {
  const buckets = new Map();
  dailyPoints.forEach((point) => {
    const weekIndex = Math.floor(daysBetween(startDate, point.date) / 7);
    const key = addDays(startDate, weekIndex * 7);
    if (!buckets.has(key)) buckets.set(key, { label: key.slice(5), dispatchSum: 0, count: 0 });
    const bucket = buckets.get(key);
    bucket.dispatchSum += point.dispatch;
    bucket.count += 1;
  });
  return Array.from(buckets.values()).map((bucket) => ({
    month: bucket.label,
    dispatch: bucket.dispatchSum / Math.max(1, bucket.count),
    count: bucket.count
  }));
}

function drawHistoryDispatchChart(points) {
  const svg = graphControls.chart;
  svg.innerHTML = "";
  const width = 960;
  const height = 320;
  const pad = 58;
  if (!points.length) return;
  const dispatchValues = points.map((p) => p.dispatch);
  const minDispatch = Math.max(0, Math.floor((Math.min(...dispatchValues) - 150) / 25) * 25);
  const maxDispatch = ceilTo25(Math.max(...dispatchValues) + 50);
  const dispatchRange = Math.max(25, maxDispatch - minDispatch);
  const x = (index) => pad + (points.length === 1 ? 0.5 : index / (points.length - 1)) * (width - pad * 2);
  const y = (dispatch) => height - pad - ((dispatch - minDispatch) / dispatchRange) * (height - pad * 2);
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: height - pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: pad, x2: pad, y2: height - pad }));
  const dispatchStep = tickStep25(dispatchRange, 7);
  for (let value = minDispatch; value <= maxDispatch; value += dispatchStep) {
    const tickY = y(value);
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: pad - 6, y1: tickY, x2: pad, y2: tickY }));
    const label = svgEl("text", { class: "chart-label", x: 8, y: tickY + 4 });
    label.textContent = `${fmt(value)} MW`;
    svg.appendChild(label);
  }
  const tickIndexes = Array.from(new Set([0, Math.floor(points.length / 3), Math.floor((points.length * 2) / 3), points.length - 1]));
  tickIndexes.forEach((index) => {
    const tickX = x(index);
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: tickX, y1: height - pad, x2: tickX, y2: height - pad + 6 }));
    const label = svgEl("text", { class: "chart-label", x: tickX - 22, y: height - pad + 22 });
    label.textContent = points[index].month;
    svg.appendChild(label);
  });
  const line = points.map((p, i) => `${i ? "L" : "M"} ${x(i)} ${y(p.dispatch)}`).join(" ");
  const area = `${line} L ${x(points.length - 1)} ${height - pad} L ${x(0)} ${height - pad} Z`;
  svg.appendChild(svgEl("path", { class: "chart-area", d: area }));
  svg.appendChild(svgEl("path", { class: "chart-line", d: line }));
  [
    { text: "Simulated dispatch (MW)", x: 8, y: 24 },
    { text: points[0].month.length === 5 ? "Historical week" : points[0].month.length === 4 ? "Historical year" : "Historical month", x: width / 2 - 45, y: height - 10 }
  ].forEach((label) => {
    const text = svgEl("text", { class: "chart-label", x: label.x, y: label.y });
    text.textContent = label.text;
    svg.appendChild(text);
  });
}

async function buildHistoryGraph() {
  if (controls.customMode.checked) return;
  const { start, end } = normalizeGraphMonths();
  const downsample = graphControls.downsample.value;
  const startDate = monthStart(start);
  const endDate = rangeEndDate(end);
  const useWeekly = daysBetween(startDate, endDate) <= 366;
  const cacheKey = `${startDate}/${endDate}`;
  graphControls.status.textContent = `Fetching daily USGS values from ${start} to ${end}...`;
  if (!historyRangeCache.has(cacheKey)) {
    historyRangeCache.set(cacheKey, window.usgsData.loadUSGSDailyRange(startDate, endDate));
  }
  const baselines = await historyRangeCache.get(cacheKey);
  const requestedDays = daysBetween(startDate, endDate);
  const excludedDays = Math.max(0, requestedDays - baselines.length);
  const dailyPoints = baselines.map((baseline) => {
    const state = scenarioFromBaseline(baseline);
    const dispatch = stationRows(state).rows.reduce((sum, d) => sum + d.dispatch, 0);
    return { date: baseline.sourceDate, dispatch };
  });
  const points = useWeekly ? weeklyAverageDispatch(dailyPoints, startDate) : downsampleDispatch(dailyPoints, downsample);
  drawHistoryDispatchChart(points);
  graphControls.status.textContent = useWeekly
    ? `${start} to ${end}: weekly average simulated dispatch in MW. ${fmt(excludedDays)} date${excludedDays === 1 ? "" : "s"} excluded where Lake James reference gage was unavailable.`
    : `${start} to ${end}: ${downsample === "year" ? "yearly" : "monthly"} average simulated dispatch in MW. ${fmt(excludedDays)} date${excludedDays === 1 ? "" : "s"} excluded where Lake James reference gage was unavailable.`;
}

const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dayOfYear(month, date) {
  return monthLengths.slice(0, month).reduce((sum, days) => sum + days, 0) + date;
}

function dateFromDay(day) {
  let remaining = day;
  for (let month = 0; month < monthLengths.length; month += 1) {
    if (remaining <= monthLengths[month]) return { month, date: remaining };
    remaining -= monthLengths[month];
  }
  return { month: 0, date: 1 };
}

function seedDateOptions() {
  const month = Number(researchControls.month.value);
  const current = Number(researchControls.date.value || 7);
  const days = monthLengths[month];
  researchControls.date.innerHTML = "";
  for (let date = 1; date <= days; date += 1) {
    const option = document.createElement("option");
    option.value = String(date);
    option.textContent = String(date);
    if (date === Math.min(current, days)) option.selected = true;
    researchControls.date.appendChild(option);
  }
}

function dayLabel(day) {
  const date = new Date(Date.UTC(2019, 0, day));
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" });
}

function researchState() {
  const month = Number(researchControls.month.value);
  const date = Number(researchControls.date.value);
  const day = dayOfYear(month, date);
  const lookahead = Number(researchControls.lookahead.value);
  const inflowUncertainty = Number(researchControls.inflowUncertainty.value);
  const lmpUncertainty = Number(researchControls.lmpUncertainty.value);
  const forecastBias = Number(researchControls.forecastBias.value) / 100;
  const dynamicMode = researchControls.mode.value === "dynamic";
  const seasonal = 0.72 + 0.28 * Math.sin(((day - 42) / 365) * Math.PI * 2) ** 2;
  const effectiveInflowBox = dynamicMode ? inflowUncertainty * seasonal : inflowUncertainty;
  const effectiveLmpBox = dynamicMode ? Math.max(4, lmpUncertainty * (0.78 + 0.22 * Math.cos((day / 365) * Math.PI * 2))) : lmpUncertainty;
  return { day, month, date, lookahead, inflowUncertainty, lmpUncertainty, forecastBias, dynamicMode, effectiveInflowBox, effectiveLmpBox };
}

function buildResearchSeries(state) {
  const hours = 24;
  const values = [];
  for (let h = 0; h < hours; h += 1) {
    const dailyShape = Math.sin(((h - 7) / 24) * Math.PI * 2);
    const peakShape = Math.max(0, Math.sin(((h - 13) / 24) * Math.PI));
    const seasonal = 0.95 + 0.22 * Math.sin(((state.day - 78) / 365) * Math.PI * 2);
    const nominalInflow = Math.max(210, 560 * seasonal + 170 * dailyShape + state.day % 17 * 7);
    const trueInflow = Math.max(120, nominalInflow / state.forecastBias);
    const lmp = Math.max(18, 34 + 26 * peakShape + 9 * Math.sin(((h + state.day) / 12) * Math.PI));
    const recWindow = h >= 10 && h <= 13;
    const deterministicCommit = lmp > 38 ? 31.5 : lmp > 30 ? 19 : 4;
    const robustHedge = state.dynamicMode
      ? Math.max(0.68, 1 - state.effectiveInflowBox / 165)
      : Math.max(0.46, 1 - state.effectiveInflowBox / 95);
    const robustCommit = Math.max(0, Math.min(31.5, deterministicCommit * robustHedge));
    const recMin = recWindow ? 650 : 260;
    const recMax = recWindow ? 1400 : 2400;
    values.push({ h, nominalInflow, trueInflow, lmp, deterministicCommit, robustCommit, recMin, recMax });
  }
  return values;
}

function evaluatePolicy(series, state, policy) {
  let storage = policy === "robust" ? 11.7 : 11.46;
  let revenue = 0;
  let shortageHours = 0;
  let spillage = 0;
  let emergencyShortage = 0;
  const points = [];
  const minStorage = 10.95;
  const maxStorage = 12.15;
  series.forEach((p) => {
    const power = policy === "robust" ? p.robustCommit : p.deterministicCommit;
    const release = p.recMin + power * 36;
    const inflow = p.trueInflow;
    storage += (inflow - release) / 20000;
    let shortage = 0;
    let spill = 0;
    if (storage < minStorage) {
      shortage = minStorage - storage;
      emergencyShortage += shortage;
      shortageHours += 1;
      storage = minStorage;
    }
    if (storage > maxStorage) {
      spill = storage - maxStorage;
      spillage += spill;
      storage = maxStorage;
    }
    revenue += power * p.lmp;
    points.push({ h: p.h, storage, release, shortage, spill, power });
  });
  return { storage, revenue, shortageHours, spillage, emergencyShortage, points };
}

function renderResearchScorecard(state, series, base, robust) {
  const card = document.querySelector("#research-scorecard");
  const priceOfRobustness = Math.max(0, ((base.revenue - robust.revenue) / Math.max(1, base.revenue)) * 100);
  const protection = Math.max(0, base.shortageHours - robust.shortageHours);
  card.innerHTML = `
    <div><span>Rolling window</span><strong>${fmt(state.lookahead / 24)} days</strong><small>24-hour firm commitment</small></div>
    <div><span>Effective inflow box</span><strong>±${fmt(state.effectiveInflowBox)}%</strong><small>${state.dynamicMode ? "Monthly dynamic" : "Static"} bound</small></div>
    <div><span>Price of robustness</span><strong>${fmt(priceOfRobustness, 1)}%</strong><small>Revenue accepted for feasibility</small></div>
    <div><span>Shortage hours avoided</span><strong>${fmt(protection)}</strong><small>Current 24-hour replay</small></div>
    <div><span>Emergency shortage</span><strong>${fmt(robust.emergencyShortage * 1000, 1)}</strong><small>Slack proxy, MCF-equivalent</small></div>
    <div><span>Bridgewater focus</span><strong>31.5 MW</strong><small>Lake James headworks sandbox</small></div>
  `;
}

function svgEl(name, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function drawUncertaintyChart(state, series) {
  const svg = document.querySelector("#uncertainty-chart");
  svg.innerHTML = "";
  const width = 620;
  const height = 300;
  const pad = 44;
  const x = (h) => pad + (h / 23) * (width - pad * 2);
  const maxInflow = Math.max(...series.map((p) => p.nominalInflow * (1 + state.effectiveInflowBox / 100))) * 1.08;
  const maxLmp = Math.max(...series.map((p) => p.lmp * (1 + state.effectiveLmpBox / 100))) * 1.22;
  const yInflow = (v) => height - pad - (v / maxInflow) * (height - pad * 2);
  const yLmp = (v) => height - pad - (v / maxLmp) * (height - pad * 2);
  const upper = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yInflow(p.nominalInflow * (1 + state.effectiveInflowBox / 100))}`).join(" ");
  const lower = series.slice().reverse().map((p) => `L ${x(p.h)} ${yInflow(p.nominalInflow * (1 - state.effectiveInflowBox / 100))}`).join(" ");
  const lmpUpper = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yLmp(p.lmp * (1 + state.effectiveLmpBox / 100))}`).join(" ");
  const lmpLower = series.slice().reverse().map((p) => `L ${x(p.h)} ${yLmp(p.lmp * (1 - state.effectiveLmpBox / 100))}`).join(" ");
  const nominal = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yInflow(p.nominalInflow)}`).join(" ");
  const lmp = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yLmp(p.lmp)}`).join(" ");

  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: height - pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: pad, x2: pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: width - pad, y1: pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("path", { class: "uncertainty-band", d: `${upper} ${lower} Z` }));
  svg.appendChild(svgEl("path", { class: "lmp-band", d: `${lmpUpper} ${lmpLower} Z` }));
  svg.appendChild(svgEl("path", { class: "chart-line", d: nominal }));
  svg.appendChild(svgEl("path", { class: "lmp-line", d: lmp }));
  [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const inflowValue = maxInflow * ratio;
    const lmpValue = maxLmp * ratio;
    const tickY = yInflow(inflowValue);
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: pad - 6, y1: tickY, x2: pad, y2: tickY }));
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: width - pad, y1: tickY, x2: width - pad + 6, y2: tickY }));
    const left = svgEl("text", { class: "chart-label", x: 5, y: tickY + 4 });
    left.textContent = fmt(inflowValue);
    svg.appendChild(left);
    const right = svgEl("text", { class: "chart-label", x: width - pad + 10, y: tickY + 4 });
    right.textContent = `$${fmt(lmpValue)}`;
    svg.appendChild(right);
  });
  [0, 6, 12, 18, 23].forEach((h) => {
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: x(h), y1: height - pad, x2: x(h), y2: height - pad + 6 }));
    const text = svgEl("text", { class: "chart-label", x: x(h) - 10, y: height - pad + 21 });
    text.textContent = `${h}:00`;
    svg.appendChild(text);
  });
  [
    { text: "CF/hr", x: 6, y: 28, cls: "chart-label" },
    { text: "$/MWh", x: width - 88, y: 28, cls: "chart-label" },
    { text: "Hour of committed day", x: width / 2 - 58, y: height - 7, cls: "chart-label" }
  ].forEach((label) => {
    const text = svgEl("text", { class: label.cls, x: label.x, y: label.y });
    text.textContent = label.text;
    svg.appendChild(text);
  });
  const legend = svgEl("g", { class: "chart-legend legend-box", transform: "translate(70 48)" });
  legend.innerHTML = `
    <rect class="legend-bg" x="-10" y="-18" width="218" height="76" rx="6"></rect>
    <line class="chart-line" x1="0" y1="0" x2="26" y2="0"></line><text x="34" y="4">Nominal inflow forecast</text>
    <rect class="uncertainty-band" x="0" y="13" width="26" height="10"></rect><text x="34" y="23">Inflow box ±${fmt(state.effectiveInflowBox)}%</text>
    <line class="lmp-line" x1="0" y1="38" x2="26" y2="38"></line><text x="34" y="42">LMP proxy</text>
    <rect class="lmp-band" x="0" y="49" width="26" height="10"></rect><text x="34" y="59">LMP box ±${fmt(state.effectiveLmpBox)}%</text>
  `;
  svg.appendChild(legend);
}

function drawStorageChart(base, robust) {
  const svg = document.querySelector("#storage-chart");
  svg.innerHTML = "";
  const width = 620;
  const height = 300;
  const pad = 44;
  const min = 10.0;
  const max = 12.25;
  const x = (h) => pad + (h / 23) * (width - pad * 2);
  const y = (v) => height - pad - ((v - min) / (max - min)) * (height - pad * 2);
  const baseLine = base.points.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${y(p.storage)}`).join(" ");
  const robustLine = robust.points.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${y(p.storage)}`).join(" ");

  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: height - pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: pad, x2: pad, y2: height - pad }));
  svg.appendChild(svgEl("rect", { class: "rule-curve-band", x: pad, y: y(12.15), width: width - pad * 2, height: y(10.95) - y(12.15) }));
  svg.appendChild(svgEl("path", { class: "base-line", d: baseLine }));
  svg.appendChild(svgEl("path", { class: "robust-line", d: robustLine }));
  [10.0, 10.5, 11.0, 11.5, 12.0].forEach((tick) => {
    const tickY = y(tick);
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: pad - 6, y1: tickY, x2: pad, y2: tickY }));
    const label = svgEl("text", { class: "chart-label", x: 6, y: tickY + 4 });
    label.textContent = tick.toFixed(1);
    svg.appendChild(label);
  });
  [0, 6, 12, 18, 23].forEach((h) => {
    svg.appendChild(svgEl("line", { class: "chart-tick", x1: x(h), y1: height - pad, x2: x(h), y2: height - pad + 6 }));
    const label = svgEl("text", { class: "chart-label", x: x(h) - 10, y: height - pad + 21 });
    label.textContent = `${h}:00`;
    svg.appendChild(label);
  });
  [...base.points, ...robust.points].forEach((p) => {
    if (p.shortage > 0 || p.spill > 0) {
      svg.appendChild(svgEl("circle", { class: p.shortage > 0 ? "recourse-shortage" : "recourse-spill", cx: x(p.h), cy: y(p.storage), r: 5 }));
    }
  });
  [
    { text: "Storage (BCF proxy)", x: 5, y: 28 },
    { text: "X axis: committed 24-hour period", x: pad + 8, y: height - 8 },
    { text: "Feasible rule-curve band", x: pad + 8, y: y(12.15) + 16 },
    { text: "Shortage/spillage dots: emergency recourse slack", x: pad + 8, y: 26 }
  ].forEach((label) => {
    const text = svgEl("text", { class: "chart-label", x: label.x, y: label.y });
    text.textContent = label.text;
    svg.appendChild(text);
  });
  const legend = svgEl("g", { class: "chart-legend legend-box", transform: `translate(${width - 178} 18)` });
  legend.innerHTML = `
    <rect class="legend-bg" x="-10" y="-18" width="172" height="94" rx="6"></rect>
    <line class="base-line" x1="0" y1="0" x2="28" y2="0"></line><text x="36" y="4">Deterministic MPC</text>
    <line class="robust-line" x1="0" y1="20" x2="28" y2="20"></line><text x="36" y="24">Robust MPC</text>
    <rect class="rule-curve-band" x="0" y="34" width="28" height="10"></rect><text x="36" y="44">Rule-curve band</text>
    <circle class="recourse-shortage" cx="14" cy="62" r="5"></circle><text x="36" y="66">Recourse event</text>
  `;
  svg.appendChild(legend);
}

function renderCascadePropagation(state) {
  const container = document.querySelector("#cascade-propagation");
  const shock = Math.round((state.forecastBias - 1) * 100);
  const lagHours = [0, 5, 9, 13, 19, 23, 30, 39, 44, 50, 58];
  container.innerHTML = "";
  developments.forEach((d, index) => {
    const item = document.createElement("div");
    item.className = "propagation-item";
    const arrival = lagHours[index];
    const attenuation = Math.max(0.18, 1 - index * 0.07);
    item.innerHTML = `
      <span>${d.reservoir}</span>
      <strong>+${arrival} hr</strong>
      <small>${shock >= 0 ? "optimistic" : "conservative"} ${Math.abs(shock)}% inflow shock, ${fmt(attenuation * 100)}% remaining signal</small>
    `;
    container.appendChild(item);
  });
}

function renderResearch() {
  const state = researchState();
  const series = buildResearchSeries(state);
  const base = evaluatePolicy(series, state, "base");
  const robust = evaluatePolicy(series, state, "robust");
  document.querySelector("#mpc-day-label").textContent = `Day ${state.day} / ${dayLabel(state.day)}`;
  document.querySelector("#inflow-uncertainty-label").textContent = `±${state.inflowUncertainty}%`;
  document.querySelector("#lmp-uncertainty-label").textContent = `±${state.lmpUncertainty}%`;
  document.querySelector("#forecast-bias-label").textContent = `${state.forecastBias.toFixed(2)}x`;
  renderResearchScorecard(state, series, base, robust);
  drawUncertaintyChart(state, series);
  drawStorageChart(base, robust);
  renderCascadePropagation(state);
}

function initMapInteractions() {
  const svg = document.querySelector("#topology");
  svg.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".node")) return;
    mapState.dragging = true;
    mapState.startX = event.clientX;
    mapState.startY = event.clientY;
    mapState.originX = mapState.x;
    mapState.originY = mapState.y;
    svg.setPointerCapture(event.pointerId);
    svg.classList.add("dragging");
  });

  svg.addEventListener("pointermove", (event) => {
    if (!mapState.dragging) return;
    mapState.x = mapState.originX + event.clientX - mapState.startX;
    mapState.y = mapState.originY + event.clientY - mapState.startY;
    drawTopology(stationRows(scenario()).rows);
  });

  svg.addEventListener("pointerup", (event) => {
    mapState.dragging = false;
    svg.releasePointerCapture(event.pointerId);
    svg.classList.remove("dragging");
  });

  svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? 1.12 : 0.9);
  }, { passive: false });
}

function zoomMap(factor) {
  mapState.scale = Math.max(0.2, Math.min(2.4, mapState.scale * factor));
  drawTopology(stationRows(scenario()).rows);
}

function updateLabels(state) {
  document.querySelector("#inflow-label").textContent = `${state.inflow}%`;
  document.querySelector("#demand-label").textContent = `${state.demand}%`;
  document.querySelector("#price-label").textContent = `$${state.price}/MWh`;
  document.querySelector("#reserve-label").textContent = `${state.reserve}%`;
  if (!controls.customMode.checked && usgsBaseline) {
    document.querySelector("#usgs-status").textContent = `Loaded ${usgsBaseline.sourceDate}: ${fmt(usgsBaseline.referenceCfs ?? usgsBaseline.totalCfs)} cfs Lake James reference discharge. ${usgsBaseline.note}`;
  } else if (!controls.customMode.checked) {
    document.querySelector("#usgs-status").textContent = "Loading USGS baseline...";
  } else {
    document.querySelector("#usgs-status").textContent = "Custom scenario mode";
  }
}

async function refreshUSGSBaseline() {
  setHistoricalControlState();
  if (controls.customMode.checked) {
    usgsBaseline = null;
    render();
    return;
  }
  document.querySelector("#usgs-status").textContent = "Loading USGS baseline...";
  try {
    usgsBaseline = await window.usgsData.loadUSGSBaseline(controls.usgsDate.value);
  } catch (error) {
    usgsBaseline = null;
    document.querySelector("#usgs-status").textContent = "USGS cache unavailable; using manual values.";
  }
  render();
}

function render() {
  setHistoricalControlState();
  const state = scenario();
  const { rows, availableCapacity } = stationRows(state);
  const totalGeneration = rows.reduce((sum, d) => sum + d.dispatch, 0);
  updateLabels(state);
  updateReleaseLabels(rows);
  document.querySelector("#metric-capacity").textContent = `${fmt(totalCapacity, 1)} MW`;
  document.querySelector("#metric-generation").textContent = `${fmt(totalGeneration, 1)} MW`;
  document.querySelector("#metric-generation-note").textContent = `${fmt((totalGeneration / Math.max(1, availableCapacity)) * 100)}% of available capacity`;
  document.querySelector("#metric-storage").textContent = `${fmt(state.storagePercent)}%`;
  document.querySelector("#metric-storage-note").textContent = `${fmt((state.storagePercent / 100) * totalStorage)} acre-ft scenario scale`;
  document.querySelector("#metric-water-value").textContent = `$${fmt(state.waterValue)}/MWh`;
  drawTopology(rows);
  updateDetails(rows);
  renderDispatch(rows);
  renderCompliance(state, rows, availableCapacity);
  drawWaterValueChart(state);
}

function selectDevelopment(id, focusMap = false) {
  selected.id = id;
  render();
  if (focusMap) {
    document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function exportCsv() {
  const rows = stationRows(scenario()).rows;
  const header = ["Development", "Reservoir", "State", "Capacity MW", "Storage acre-ft", "Dispatch MW", "Release cfs", "Release schedule %", "Status"];
  const lines = rows.map((d) => [
    d.name,
    d.reservoir,
    d.state,
    d.capacity.toFixed(3),
    d.storage,
    d.dispatch.toFixed(2),
    d.release,
    Math.round(d.releaseMultiplier * 100),
    d.status
  ]);
  const csv = [header, ...lines]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "catawba-wateree-dispatch.csv";
  a.click();
  URL.revokeObjectURL(url);
}

seedOutageOptions();
seedReleaseControls();
initMapInteractions();
controls.usgsDate.min = "2009-01-01";
controls.usgsDate.max = "2026-12-31";
controls.usgsDate.value = clampDate(controls.usgsDate.value, controls.usgsDate.min, controls.usgsDate.max);
document.querySelectorAll("[data-metric-help]").forEach((button) => {
  button.addEventListener("click", () => showMetricHelp(button.dataset.metricHelp));
});
Object.values(controls).forEach((control) => control.addEventListener("input", render));
controls.customMode.addEventListener("change", refreshUSGSBaseline);
controls.usgsDate.addEventListener("change", refreshUSGSBaseline);
controls.outage.addEventListener("change", render);
document.querySelector("#reset-view").addEventListener("click", () => {
  selected.id = null;
  mapState.scale = .6;
  mapState.x = 175;
  mapState.y = 0;
  render();
});
document.querySelector("#zoom-in").addEventListener("click", () => zoomMap(1.15));
document.querySelector("#zoom-out").addEventListener("click", () => zoomMap(0.87));
document.querySelector("#reset-releases").addEventListener("click", () => {
  developments.forEach((d) => {
    releaseMultipliers[d.id] = 100;
  });
  render();
});
graphControls.play.addEventListener("click", toggleHistoryPlayback);
graphControls.step.addEventListener("click", stepHistoryDate);
graphControls.build.addEventListener("click", buildHistoryGraph);
graphControls.start.addEventListener("change", normalizeGraphMonths);
graphControls.end.addEventListener("change", normalizeGraphMonths);
graphControls.downsample.addEventListener("change", buildHistoryGraph);
document.querySelector("#export-csv").addEventListener("click", exportCsv);

setHistoricalControlState();
refreshUSGSBaseline();
