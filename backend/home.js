import { observeAuth, logout, getUserData } from "./auth.js";

let currentLanguage = "html";

function getLayout() {
  const width = window.innerWidth;
  const scale = Math.max(0.7, Math.min(1.2, width / 1200));

  return {
    COL_W: 170 * scale,
    ROW_H: 190 * scale,
    PAD_X: 140 * scale,
    PAD_Y: 140 * scale,
    COIN_R: 36 * scale,
    NODES_PER_ROW: width < 600 ? 3 : width < 900 ? 4 : 5
  };
}

let layout = getLayout();
let currentUserData = {
  name: "",
  avatar: "",
  completedNodes: []
};

const COURSE = [
  {
    title: "The Basics",
    color: "#58cc02",
    stops: [
      { id: "variables_easy", type: "coin", label: "Variables" },
      { id: "variables_medium", type: "coin", label: "Variables+" },
      { id: "loops_easy", type: "coin", label: "Loops" },
      { id: "basics_chest", type: "chest", label: "Chest" }
    ]
  },
  {
    title: "Data & Logic",
    color: "#1cb0f6",
    stops: [
      { id: "arrays_easy", type: "coin", label: "Arrays" },
      { id: "arrays_medium", type: "coin", label: "Arrays+" },
      { id: "conditionals", type: "coin", label: "If / Else" },
      { id: "loops_medium", type: "coin", label: "Loops+" },
      { id: "data_chest", type: "chest", label: "Chest" }
    ]
  },
  {
    title: "Functions & Beyond",
    color: "#ce82ff",
    stops: [
      { id: "functions_easy", type: "coin", label: "Functions" },
      { id: "functions_medium", type: "coin", label: "Functions+" },
      { id: "algorithms", type: "coin", label: "Algorithms" },
      { id: "final_chest", type: "chest", label: "Chest" }
    ]
  }
];

const WAVE = [0, -35, 20, -25, 15, -40, 22, -18, 28, -22];

function computePositions(allStops) {
  const positions = [];

  allStops.forEach((_, i) => {
    const row = Math.floor(i / layout.NODES_PER_ROW);
    const col = i % layout.NODES_PER_ROW;
    const ltr = row % 2 === 0;
    const xCol = ltr
      ? col
      : layout.NODES_PER_ROW - 1 - col;

    const cx = layout.PAD_X + xCol * layout.COL_W;
    const wave = WAVE[i % WAVE.length];
    const cy = layout.PAD_Y + row * layout.ROW_H + wave;

    positions.push({ cx, cy });
  });

  return positions;
}

function computeStates(completedIds) {
  const done = new Set(completedIds || []);
  const allStops = COURSE.flatMap(section => section.stops);
  let availableAssigned = false;

  return allStops.reduce((map, stop) => {
    if (done.has(stop.id)) {
      map[stop.id] = "done";
    } else if (!availableAssigned) {
      map[stop.id] = "available";
      availableAssigned = true;
    } else {
      map[stop.id] = "locked";
    }

    return map;
  }, {});
}

function drawConnectors(svg, positions, states, allStops) {
  svg.innerHTML = "";

  for (let i = 1; i < positions.length; i++) {
    const a = positions[i - 1];
    const b = positions[i];

    const prevState = states[allStops[i - 1].id];
    const color = prevState === "done"
      ? "#00e5ff"
      : "#2a2f45";

    const strokeW = prevState === "done" ? 4 : 3;

    const cp1x = a.cx + (b.cx - a.cx) * 0.5;
    const cp1y = a.cy;
    const cp2x = b.cx - (b.cx - a.cx) * 0.5;
    const cp2y = b.cy;

    const path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    path.setAttribute(
      "d",
      `M ${a.cx} ${a.cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${b.cx} ${b.cy}`
    );

    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", strokeW);
    path.setAttribute("stroke-linecap", "round");

    if (prevState !== "done") {
      path.setAttribute("stroke-dasharray", "6 5");
    }

    svg.appendChild(path);
  }
}

function makeCoin(stop, state, cx, cy, delay) {
  const btn = document.createElement("button");

  btn.className = `coin ${state}`;
  btn.style.width = `${layout.COIN_R * 2}px`;
  btn.style.height = `${layout.COIN_R * 2}px`;
  btn.style.left = `${cx}px`;
  btn.style.top = `${cy}px`;
  btn.style.animationDelay = `${delay}s`;

  btn.dataset.id = stop.id;
  btn.dataset.state = state;

  const label = document.createElement("div");
  label.className = "coin-label";
  label.textContent = stop.label;

  btn.appendChild(label);

  if (state === "done") {
    const check = document.createElement("div");

    check.className = "check-badge";
    check.textContent = "✓";

    btn.appendChild(check);
  }

  if (state === "available") {
    const bubble = document.createElement("div");

    bubble.className = "start-bubble";
    bubble.textContent = "START";

    btn.appendChild(bubble);
  }

  btn.addEventListener("click", () => {
    if (state === "locked") {
      shake(btn);
      return;
    }

    window.location.href = `quiz.html?nodeId=${stop.id}`;
  });

  return btn;
}

function makeChest(stop, state, cx, cy, delay) {
  const cls =
    state === "done"
      ? "done-chest"
      : state === "available"
        ? "available-chest"
        : "locked-chest";

  const wrap = document.createElement("div");

  wrap.className = `chest-node ${cls}`;
  wrap.style.left = `${cx}px`;
  wrap.style.top = `${cy}px`;
  wrap.style.animation = `popIn .4s ease ${delay}s both`;

  wrap.dataset.id = stop.id;
  wrap.dataset.state = state;

  wrap.innerHTML = `
    <div class="chest-graphic">
      <div class="chest-lid-el"></div>
      <div class="chest-body-el">
        <div class="chest-lock-el"></div>
      </div>
    </div>
    <div class="chest-label">${stop.label}</div>
  `;

  if (state === "available") {
    const bubble = document.createElement("div");

    bubble.className = "start-bubble";
    bubble.style.bottom = "calc(100% - 20px)";
    bubble.textContent = "OPEN";

    wrap.appendChild(bubble);
  }

  wrap.addEventListener("click", () => {
    if (state === "locked") {
      shake(wrap);
      return;
    }

    alert("Chest unlocked! Rewards coming soon.");
  });

  return wrap;
}

function shake(el) {
  const offsets = [-7, 7, -4, 4, 0];

  offsets.forEach((x, i) => {
    setTimeout(() => {
      el.style.transform =
        `translate(calc(-50% + ${x}px), -50%)`;
    }, i * 65);
  });

  setTimeout(() => {
    el.style.transform = "";
  }, 400);
}

function placeSectionLabels(canvas, positions) {
  let globalIdx = 0;

  COURSE.forEach(section => {
    const firstPos = positions[globalIdx];
    const strip = document.createElement("div");

    strip.className = "section-strip";
    strip.style.left = `${firstPos.cx - 36}px`;
    strip.style.top = `${firstPos.cy - 100}px`;
    strip.style.borderColor = section.color;
    strip.textContent = section.title;

    canvas.appendChild(strip);

    globalIdx += section.stops.length;
  });
}

function renderPath(userData) {
  const completedIds =
    userData.progress?.[currentLanguage] || [];

  const states = computeStates(completedIds);
  const allStops = COURSE.flatMap(section => section.stops);
  const positions = computePositions(allStops);

  const maxX =
    Math.max(...positions.map(position => position.cx)) +
    layout.PAD_X;

  const maxY =
    Math.max(...positions.map(position => position.cy)) +
    layout.PAD_Y +
    60;

  const canvas = document.getElementById("path-canvas");
  const svg = document.getElementById("path-svg");

  [...canvas.children].forEach(child => {
    if (child !== svg) {
      child.remove();
    }
  });

  canvas.style.width = `${maxX}px`;
  canvas.style.margin = "0 auto";
  canvas.style.height = `${maxY}px`;

  svg.setAttribute("viewBox", `0 0 ${maxX} ${maxY}`);
  svg.style.width = `${maxX}px`;
  svg.style.height = `${maxY}px`;

  drawConnectors(
    svg,
    positions,
    states,
    allStops
  );

  placeSectionLabels(
    canvas,
    positions
  );

  let delay = 0;
  let mascotPlaced = false;

  allStops.forEach((stop, i) => {
    const { cx, cy } = positions[i];
    const state = states[stop.id];

    let el;

    if (stop.type === "chest") {
      el = makeChest(
        stop,
        state,
        cx,
        cy,
        delay
      );
    } else {
      el = makeCoin(
        stop,
        state,
        cx,
        cy,
        delay
      );
    }

    canvas.appendChild(el);

    if (
      state === "available" &&
      !mascotPlaced
    ) {
      const mascot =
        document.createElement("div");

      mascot.className = "mascot";
      mascot.textContent = userData.avatar || "";

      const offsetX = layout.COL_W * 0.7;
      const offsetY = layout.ROW_H * -0.25;

      const isNearRightEdge =
        cx > canvas.offsetWidth - 200;

      mascot.style.left = isNearRightEdge
        ? `${cx - offsetX}px`
        : `${cx + offsetX}px`;

      mascot.style.top = `${cy - offsetY}px`;

      canvas.appendChild(mascot);

      mascotPlaced = true;
    }

    delay += 0.05;
  });

  const lastPos =
    positions[positions.length - 1];

  const trophy =
    document.createElement("div");

  trophy.className = "trophy-node";
  trophy.style.left =
    `${lastPos.cx + layout.COL_W}px`;
  trophy.style.top = `${lastPos.cy}px`;

  trophy.innerHTML = `
    <div class="trophy-coin"></div>
    <div class="trophy-label">All done!</div>
  `;

  canvas.appendChild(trophy);

  const availIdx = allStops.findIndex(
    stop => states[stop.id] === "available"
  );

  if (availIdx >= 0) {
    const { cx } = positions[availIdx];

    const scroll =
      document.getElementById("path-scroll");

    const centerOffset =
      cx - scroll.clientWidth / 2;

    setTimeout(() => {
      scroll.scrollTo({
        left: centerOffset,
        behavior: "smooth"
      });
    }, 100);
  }
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.body.dataset.lang = lang;
  renderPath(currentUserData);
}

document.body.style.visibility = "hidden";

observeAuth(async user => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const data = await getUserData(user.uid);

  userData.name =
    data.name || "PIXEL HERO";

  userData.avatar =
    data.avatar || "";

  userData.xp =
    data.xp || 0;

  userData.streak =
    data.streak || 0;

  userData.progress =
    data.progress || {
      html: [],
      python: [],
      java: []
    };

  document.getElementById("xp-val").innerText =
    userData.xp;

  document.getElementById("streak-val").innerText =
    userData.streak;

  document.getElementById("nav-avatar").innerText =
    userData.avatar;

  document.getElementById("welcomeAvatar").innerText =
    userData.avatar;

  document.getElementById("welcomeName").innerHTML =
    userData.name;

  if (
    typeof renderPixelJourney === "function"
  ) {
    renderPixelJourney();
  }

  document.body.style.visibility = "visible";
});

document
  .getElementById("logoutBtn")
  .addEventListener("click", async () => {
    await logout();
    window.location.href = "index.html";
  });

window.addEventListener("resize", () => {
  if (typeof layout !== "undefined") {
    layout = getLayout();

    if (
      typeof renderPixelJourney === "function"
    ) {
      renderPixelJourney();
    }
  }
});