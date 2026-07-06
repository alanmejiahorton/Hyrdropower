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
const mapState = { scale: 1, x: 0, y: 0, dragging: false, startX: 0, startY: 0, originX: 0, originY: 0 };

const controls = {
  inflow: document.querySelector("#inflow"),
  demand: document.querySelector("#demand"),
  price: document.querySelector("#price"),
  reserve: document.querySelector("#reserve"),
  outage: document.querySelector("#outage"),
  spring: document.querySelector("#spring-stabilization")
};

const researchControls = {
  month: document.querySelector("#mpc-month"),
  date: document.querySelector("#mpc-date"),
  lookahead: document.querySelector("#lookahead-window"),
  inflowUncertainty: document.querySelector("#inflow-uncertainty"),
  lmpUncertainty: document.querySelector("#lmp-uncertainty"),
  forecastBias: document.querySelector("#forecast-bias"),
  mode: document.querySelector("#mpc-mode")
};

const selected = {
  id: null
};

function fmt(value, digits = 0) {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  });
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

function scenario() {
  const inflow = Number(controls.inflow.value);
  const demand = Number(controls.demand.value);
  const price = Number(controls.price.value);
  const reserve = Number(controls.reserve.value);
  const spring = controls.spring.checked;
  const droughtPenalty = inflow < 55 ? (55 - inflow) * 0.006 : 0;
  const wetSpillPenalty = inflow > 112 ? (inflow - 112) * 0.005 : 0;
  const stabilizationPenalty = spring ? 0.07 : 0;
  const reservePenalty = reserve / 100;
  const waterAvailability = Math.max(0.18, Math.min(1.08, inflow / 100 - droughtPenalty - stabilizationPenalty));
  const demandPull = 0.35 + demand / 118 + price / 360;
  const dispatchFactor = Math.max(0.04, Math.min(1, waterAvailability * demandPull * (1 - reservePenalty) - wetSpillPenalty));
  const storagePercent = Math.max(31, Math.min(99, 47 + inflow * 0.43 - demand * 0.12 - (spring ? 3 : 0)));
  const waterValue = Math.max(8, price * (1.35 - storagePercent / 130) + demand * 0.12 + Math.max(0, 70 - inflow) * 0.7);

  return {
    inflow,
    demand,
    price,
    reserve,
    spring,
    waterAvailability,
    dispatchFactor,
    storagePercent,
    waterValue,
    outage: controls.outage.value
  };
}

function stationRows(state) {
  let availableCapacity = 0;
  const rows = developments.map((d, index) => {
    const out = state.outage === d.id;
    const releaseMultiplier = releaseMultipliers[d.id] / 100;
    const upstreamStorageWeight = d.storage / totalStorage;
    const localFlow = Math.max(0.15, state.waterAvailability + upstreamStorageWeight * 0.7 - index * 0.008);
    const scheduleEffect = Math.max(0.5, Math.min(1.35, releaseMultiplier));
    const dispatch = out ? 0 : Math.min(d.capacity, d.capacity * state.dispatchFactor * localFlow * (0.72 + scheduleEffect * 0.28));
    const baseRelease = d.minFlow + dispatch * (index < 5 ? 20 : 14) + Math.max(0, state.inflow - 100) * 8;
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

function drawTopology(rows) {
  const svg = document.querySelector("#topology");
  svg.innerHTML = "";

  const positions = rows.map((d) => ({ ...d, ...mapPositions[d.id] }));

  const ns = "http://www.w3.org/2000/svg";
  const defs = document.createElementNS(ns, "defs");
  defs.innerHTML = `
    <filter id="relief">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="8" result="noise"></feTurbulence>
      <feDiffuseLighting in="noise" lighting-color="#ffffff" surfaceScale="2.6">
        <feDistantLight azimuth="315" elevation="42"></feDistantLight>
      </feDiffuseLighting>
      <feComposite operator="arithmetic" k1="0.25" k2="0.65" k3="0.25" k4="0"></feComposite>
    </filter>
  `;
  svg.appendChild(defs);

  const viewport = document.createElementNS(ns, "g");
  viewport.setAttribute("class", "map-viewport");
  viewport.setAttribute("transform", `translate(${mapState.x} ${mapState.y}) scale(${mapState.scale})`);
  svg.appendChild(viewport);

  const group = document.createElementNS(ns, "g");
  group.setAttribute("transform", "translate(78 -88)");
  viewport.appendChild(group);

  const basin = document.createElementNS(ns, "path");
  basin.setAttribute("class", "basin-shape");
  basin.setAttribute("d", "M105 118 L155 80 L238 50 L342 72 L460 88 L565 122 L596 205 L690 250 L674 360 L713 438 L675 550 L716 640 L704 738 L778 810 L742 900 L635 918 L576 820 L546 702 L504 590 L516 496 L478 382 L410 318 L318 292 L234 260 L150 252 L88 205 Z");
  group.appendChild(basin);

  const stateLine = document.createElementNS(ns, "path");
  stateLine.setAttribute("class", "state-boundary");
  stateLine.setAttribute("d", "M72 430 C210 421, 354 424, 510 444 C590 454, 676 452, 798 430");
  group.appendChild(stateLine);

  [
    { text: "North Carolina", x: 120, y: 395 },
    { text: "South Carolina", x: 112, y: 458 },
    { text: "Catawba-Wateree River Basin", x: 96, y: 620 },
    { text: "FERC Project No. 2232", x: 96, y: 650 }
  ].forEach((label) => {
    const text = document.createElementNS(ns, "text");
    text.setAttribute("class", label.text.includes("FERC") ? "map-caption small" : "map-caption");
    text.setAttribute("x", label.x);
    text.setAttribute("y", label.y);
    text.textContent = label.text;
    group.appendChild(text);
  });

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
    label.setAttribute("x", d.labelX);
    label.setAttribute("y", d.labelY);
    label.textContent = d.reservoir.replace("Lake ", "").replace(" Reservoir", "");
    node.appendChild(label);

    const sub = document.createElementNS(ns, "text");
    sub.setAttribute("class", "subtext");
    sub.setAttribute("x", d.labelX);
    sub.setAttribute("y", d.labelY + 16);
    sub.textContent = `${fmt(d.release)} cfs`;
    node.appendChild(sub);

    group.appendChild(node);
  });

  const scale = document.createElementNS(ns, "g");
  scale.setAttribute("class", "map-scale");
  scale.setAttribute("transform", "translate(610 920)");
  scale.innerHTML = `
    <line x1="0" y1="0" x2="120" y2="0"></line>
    <line x1="0" y1="-7" x2="0" y2="7"></line>
    <line x1="60" y1="-5" x2="60" y2="5"></line>
    <line x1="120" y1="-7" x2="120" y2="7"></line>
    <text x="0" y="24">0</text>
    <text x="48" y="24">25</text>
    <text x="99" y="24">50 mi</text>
  `;
  group.appendChild(scale);

  const north = document.createElementNS(ns, "g");
  north.setAttribute("class", "north-arrow");
  north.setAttribute("transform", "translate(760 120)");
  north.innerHTML = `<path d="M0 -32 L12 20 L0 12 L-12 20 Z"></path><text x="-5" y="-42">N</text>`;
  group.appendChild(north);
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
    detailSummary.textContent = "The cascade is modeled as coordinated storage and releases: upstream water availability shapes downstream generation, minimum flows, spillage risk, and water value.";
    detailReservoir.textContent = "11 reservoirs";
    detailCapacity.textContent = `${fmt(totalCapacity, 1)} MW`;
    detailStorage.textContent = `${fmt(totalStorage)} acre-ft scale`;
    detailFlow.textContent = "Daily minimum releases monitored";
    detailBar.style.width = "100%";
    [
      "Lake Norman dominates storage scale and provides the main downstream safety buffer.",
      "Hydropower dispatch is flexible, so reserve holdback can reduce immediate generation while preserving ancillary-service capability.",
      "Drought scenarios raise water value and tighten minimum-flow watch conditions."
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
      <td><span class="status-pill ${statusClass}">${d.status}</span></td>
    `;
    body.appendChild(tr);
  });

  body.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectDevelopment(button.dataset.id));
  });
}

function updateReleaseLabels(rows) {
  rows.forEach((d) => {
    const input = document.querySelector(`#release-${d.id}`);
    const label = document.querySelector(`#release-label-${d.id}`);
    if (input && Number(input.value) !== releaseMultipliers[d.id]) input.value = releaseMultipliers[d.id];
    if (label) label.textContent = `${fmt(releaseMultipliers[d.id])}% / ${fmt(d.release)} cfs`;
  });
}

function renderCompliance(state, rows, availableCapacity) {
  const list = document.querySelector("#compliance-list");
  list.innerHTML = "";

  const signals = [
    {
      level: state.inflow < 55 ? "alert" : state.inflow < 70 ? "warning" : "normal",
      text: state.inflow < 55
        ? "Low Inflow Protocol watch: scenario inflows are below 55% of normal."
        : "Minimum-flow releases are represented for each development."
    },
    {
      level: state.spring ? "warning" : "normal",
      text: state.spring
        ? "Spring stabilization active for Lake Wateree, Wylie, Norman, and James."
        : "Spring stabilization disabled; reservoirs can fluctuate more freely in the model."
    },
    {
      level: availableCapacity < totalCapacity ? "warning" : "normal",
      text: availableCapacity < totalCapacity
        ? `Forced outage reduces available capacity to ${fmt(availableCapacity, 1)} MW.`
        : "All modeled powerhouses are available."
    },
    {
      level: rows.some((d) => d.status === "Spill risk") ? "warning" : "normal",
      text: rows.some((d) => d.status === "Spill risk")
        ? "High-flow scenario flags small downstream pools for spillage tracking."
        : "No small-pool spill risk is currently flagged."
    },
    {
      level: rows.some((d) => d.status === "Below min") ? "alert" : rows.some((d) => d.status === "Drawdown") ? "warning" : "normal",
      text: rows.some((d) => d.status === "Below min")
        ? "At least one custom release schedule is below the modeled daily minimum flow target."
        : rows.some((d) => d.status === "Drawdown")
          ? "High custom releases are drawing down a small operational pool."
          : "Individual release schedules are within modeled guardrails."
    },
    {
      level: "normal",
      text: "Fishway prescriptions and water-quality monitoring are tracked as compliance obligations, not optimized here."
    }
  ];

  signals.forEach((signal) => {
    const div = document.createElement("div");
    div.className = `signal ${signal.level}`;
    div.textContent = signal.text;
    list.appendChild(div);
  });
}

function drawWaterValueChart(state) {
  const svg = document.querySelector("#water-value-chart");
  svg.innerHTML = "";
  const ns = "http://www.w3.org/2000/svg";
  const width = 520;
  const height = 240;
  const pad = 44;
  const points = Array.from({ length: 13 }, (_, i) => {
    const storage = 35 + i * 5;
    const value = Math.max(8, state.price * (1.35 - storage / 130) + state.demand * 0.12 + Math.max(0, 70 - state.inflow) * 0.7);
    return { storage, value };
  });
  const maxValue = Math.max(...points.map((p) => p.value)) * 1.08;
  const x = (storage) => pad + ((storage - 35) / 60) * (width - pad * 2);
  const y = (value) => height - pad - (value / maxValue) * (height - pad * 2);
  const line = points.map((p, i) => `${i ? "L" : "M"} ${x(p.storage)} ${y(p.value)}`).join(" ");
  const area = `${line} L ${x(95)} ${height - pad} L ${x(35)} ${height - pad} Z`;

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

  [35, 50, 65, 80, 95].forEach((tick) => {
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

  [0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const value = maxValue * ratio;
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
  });

  const areaPath = document.createElementNS(ns, "path");
  areaPath.setAttribute("class", "chart-area");
  areaPath.setAttribute("d", area);
  svg.appendChild(areaPath);

  const path = document.createElementNS(ns, "path");
  path.setAttribute("class", "chart-line");
  path.setAttribute("d", line);
  svg.appendChild(path);

  const current = { storage: state.storagePercent, value: state.waterValue };
  const dot = document.createElementNS(ns, "circle");
  dot.setAttribute("class", "chart-dot");
  dot.setAttribute("cx", x(current.storage));
  dot.setAttribute("cy", y(current.value));
  dot.setAttribute("r", 7);
  svg.appendChild(dot);

  [
    { text: "Storage inventory (% usable)", x: width / 2 - 68, y: height - 5 },
    { text: "Water value ($/MWh)", x: 10, y: 18 },
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
  const nominal = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yInflow(p.nominalInflow)}`).join(" ");
  const lmp = series.map((p, i) => `${i ? "L" : "M"} ${x(p.h)} ${yLmp(p.lmp)}`).join(" ");

  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: height - pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: pad, y1: pad, x2: pad, y2: height - pad }));
  svg.appendChild(svgEl("line", { class: "chart-axis", x1: width - pad, y1: pad, x2: width - pad, y2: height - pad }));
  svg.appendChild(svgEl("path", { class: "uncertainty-band", d: `${upper} ${lower} Z` }));
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
    { text: "Blue line: nominal inflow forecast", x: pad + 8, y: 20, cls: "chart-label" },
    { text: `Blue band: inflow box ±${fmt(state.effectiveInflowBox)}%`, x: pad + 8, y: 38, cls: "chart-label" },
    { text: `Gold dashed: LMP proxy ±${fmt(state.effectiveLmpBox)}%`, x: width - 212, y: 20, cls: "chart-label" },
    { text: "Left axis: CF/hr", x: 6, y: 28, cls: "chart-label" },
    { text: "Right axis: $/MWh", x: width - 100, y: 40, cls: "chart-label" }
  ].forEach((label) => {
    const text = svgEl("text", { class: label.cls, x: label.x, y: label.y });
    text.textContent = label.text;
    svg.appendChild(text);
  });
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
  const legend = svgEl("g", { class: "chart-legend", transform: `translate(${width - 178} 18)` });
  legend.innerHTML = `
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
  mapState.scale = Math.max(0.65, Math.min(2.4, mapState.scale * factor));
  drawTopology(stationRows(scenario()).rows);
}

function updateLabels(state) {
  document.querySelector("#inflow-label").textContent = `${state.inflow}%`;
  document.querySelector("#demand-label").textContent = `${state.demand}%`;
  document.querySelector("#price-label").textContent = `$${state.price}/MWh`;
  document.querySelector("#reserve-label").textContent = `${state.reserve}%`;
}

function render() {
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
  renderResearch();
}

function selectDevelopment(id) {
  selected.id = id;
  render();
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
seedDateOptions();
initMapInteractions();
Object.values(controls).forEach((control) => control.addEventListener("input", render));
Object.values(researchControls).forEach((control) => control.addEventListener("input", render));
controls.outage.addEventListener("change", render);
researchControls.month.addEventListener("change", () => {
  seedDateOptions();
  render();
});
researchControls.date.addEventListener("change", render);
researchControls.lookahead.addEventListener("change", render);
researchControls.mode.addEventListener("change", render);
document.querySelector("#reset-view").addEventListener("click", () => {
  selected.id = null;
  mapState.scale = 1;
  mapState.x = 0;
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
document.querySelector("#step-mpc").addEventListener("click", () => {
  const current = researchState();
  const next = dateFromDay(current.day >= 365 ? 1 : current.day + 1);
  researchControls.month.value = String(next.month);
  seedDateOptions();
  researchControls.date.value = String(next.date);
  render();
});
document.querySelector("#export-csv").addEventListener("click", exportCsv);

render();
