


// ╔══════════════════════════════════════════════════════════════════╗
// ║          USER FILE CONFIGURATION — EDIT THIS SECTION           ║
// ║  Add your own syllabus images and PDF file paths here          ║
// ╚══════════════════════════════════════════════════════════════════╝

const USER_CONFIG = {
  // ── SYLLABUS IMAGES (one per section) ──────────────────────────
  syllabusImages: {
    1: "m4/m4syllabus.jpeg",
    2: "mpmc/mpmcsyllabus.jpeg",
    3: "ac/acsyllabus.jpeg",
    4: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%238b5a2b'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E📖 LITERATURE SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EPoetry, Prose, Drama%3C/text%3E%3C/svg%3E",
    5: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%234a5d23'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E🏛️ HISTORY SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EAncient, Medieval, Modern%3C/text%3E%3C/svg%3E",
    6: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%239c6e3e'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E📊 ECONOMICS SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EMicro, Macro, Trade%3C/text%3E%3C/svg%3E",
    7: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23736e6e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E📄 OLD QUESTION PAPERS%3C/text%3E%3C/svg%3E",
  },

  // ── PDF FILES (5 units per section, unitIndex 0 = Unit 1) ──────
  pdfFiles: {
    1: {
      0: "m4/unit-1.pdf",
      1: "m4/unit2.pdf",
      2: "m4/unit-3.pdf",
      3: "m4/unit-4.pdf",
      4: "m4/unit -5.pdf",
    },
    2: {
      0: "mpmc/MPMC unit-1.pdf",
      1: "mpmc/MPMC UNIT-2.pdf",
      2: "mpmc/MPMC unit-3.pdf",
      3: "mpmc/MPMC unit-4.pdf",
      4: "mpmc/MPMC UNIT-5.pdf",
    },
    3: {
      0: "ac/ac 12345.pdf"
    },
    4: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    },
    5: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    },
    6: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    },
    7: {
      0: "oldqp.pdf",
    },
  },
};

// ╔══════════════════════════════════════════════════════════════════╗
// ║              END OF USER CONFIGURATION                         ║
// ╚══════════════════════════════════════════════════════════════════╝

const FALLBACK_PDFS = [
  // "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  // "https://www.orimi.com/pdf-test.pdf",
  // "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",
  // "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
  // "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf",
];

function getConfiguredPdfUrl(sectionId, unitIndex) {
  return USER_CONFIG.pdfFiles[sectionId] &&
    USER_CONFIG.pdfFiles[sectionId][unitIndex]
    ? USER_CONFIG.pdfFiles[sectionId][unitIndex]
    : FALLBACK_PDFS[unitIndex % FALLBACK_PDFS.length];
}

function getConfiguredSyllabusImage(sectionId) {
  if (USER_CONFIG.syllabusImages[sectionId])
    return USER_CONFIG.syllabusImages[sectionId];
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect width='400' height='200' fill='#275b73'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='18'>Section ${sectionId} Syllabus</text></svg>`,
  )}`;
}

const SECTIONS = [
  {
    id: 1,
    label: "M-4",
    icon: "math",
    color: "#6ab4ff",
    subject: "M-4",
    units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
  },
  {
    id: 2,
    label: "MPMC",
    icon: "physics",
    color: "#78dca0",
    subject: "MPMC",
    units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
  },
  {
    id: 3,
    label: "AC",
    icon: "cs",
    color: "#ffb450",
    subject: "AC",
    units: ["Unit:  1, 2, 3, 4, 5 "],
  },
  {
    id: 4,
    label: "EMF",
    icon: "lit",
    color: "#dc78c8",
    subject: "EMF",
    units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
  },
  {
    id: 5,
    label: "EVS",
    icon: "hist",
    color: "#50c8e6",
    subject: "EVS",
    units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
  },
  {
    id: 6,
    label: "LIC",
    icon: "econ",
    color: "#ff7864",
    subject: "LIC",
    units: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"],
  },
  {
    id: 7,
    label: "Old QP",
    icon: "lit",
    color: "#ff7864",
    subject: "Old QP",
    units: ["6 Papers"],
  },
];

const PASSWORDS = {
  1: "m4passv",
  2: "mpmcpasss",
  3: "acpassg",
  4: "emfpassi",
  5: "evspasst",
  6: "licpassn",
  7: "oldqppassd",
};
const UNLOCKED = {};
let activeSection = null;
let pendingId = null;

// Stars generation
(function () {
  const c = document.getElementById("stars");
  if (c) {
    for (let i = 0; i < 80; i++) {
      const s = document.createElement("span");
      const sz = Math.random() * 2 + 0.5;
      s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${2 + Math.random() * 4}s;--del:${Math.random() * 4}s;`;
      c.appendChild(s);
    }
  }
})();

const NAV_ICONS = {
  math: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
  physics: `<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>`,
  cs: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  lit: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  hist: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  econ: `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
};

function buildNav() {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;
  nav.innerHTML = "";
  SECTIONS.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = `nav-btn s${s.id}`;
    btn.id = `nb${s.id}`;
    btn.innerHTML = `
      <div class="nav-icon-wrap">
        <svg class="nav-svg" viewBox="0 0 24 24">${NAV_ICONS[s.icon]}</svg>
        ${UNLOCKED[s.id] ? "" : `<span class="nav-badge">🔒</span>`}
      </div>
      <span class="nav-label">${s.label}</span>`;
    btn.onclick = (e) => handleNav(s.id, e, btn);
    nav.appendChild(btn);
  });
}

function handleNav(id, e, btn) {
  const r = document.createElement("div");
  r.className = "ripple";
  const rect = btn.getBoundingClientRect();
  r.style.left = `${e.clientX - rect.left}px`;
  r.style.top = `${e.clientY - rect.top}px`;
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);

  if (UNLOCKED[id]) {
    showSection(id);
  } else {
    openModal(id);
  }
}

function openModal(id) {
  pendingId = id;
  const s = SECTIONS[id - 1];
  if (!s) return;
  document.getElementById("mHint").textContent =
    `🔒 ${s.subject} — Enter password`;
  document.getElementById("pwdIn").value = "";
  document.getElementById("errMsg").textContent = "";
  document.getElementById("modal").classList.add("active");
  setTimeout(() => document.getElementById("pwdIn").focus(), 200);
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.remove("active");
  pendingId = null;
}

function tryUnlock() {
  const pwd = document.getElementById("pwdIn").value;
  if (PASSWORDS[pendingId] === pwd) {
    UNLOCKED[pendingId] = true;
    const badge = document.querySelector(`#nb${pendingId} .nav-badge`);
    if (badge) badge.remove();
    closeModal();
    showSection(pendingId);
  } else {
    document.getElementById("errMsg").textContent =
      `❌ Wrong password. Hint: Contact Seshan or Vidhya.`;
    document.getElementById("pwdIn").value = "";
    document.getElementById("pwdIn").focus();
  }
}

// Helper function to escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function showWelcome() {
  activeSection = null;
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((b) => b.classList.remove("active"));
  const panel = document.getElementById("panel");
  if (panel) {
    panel.innerHTML = `<br><br>
      <div class="welcome">
        <div class="vault-3d">
          <div class="vault-cube">
            <div class="face front">📚</div><div class="face back">🏆</div>
            <div class="face left">🎓</div><div class="face right">📒</div>
            <div class="face top">📋</div><div class="face bottom">📖</div>
          </div>
        </div><br>
        <h2>Welcome to Study Vault</h2>
        <p>Tap a subject below to get started.</p>
        <div class="key-pill">🔑 Passwords: Contact</div>
        <div style="display:flex;gap:10px;margin-top:5px;flex-wrap:wrap;justify-content:center;">
          <a class="key-pill" style="text-decoration:none;" href="tel:+6379075447">Seshan: 6379075447</a>
          <a class="key-pill" style="text-decoration:none;" href="tel:+6383340975">Vidhya: 6383340975</a>
        </div>
      </div>`;
  }
}

const UNIT_ICONS = ["📐", "⚗️", "💻", "🖊️", "🗿", "💹"];

// DOWNLOAD SYLLABUS FUNCTION - WORKING VERSION
function downloadSyllabus(url, subject) {
  // Clean the subject name for filename
  const cleanSubject = subject.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  
  // For data URLs (SVG placeholders and base64 images)
  if (url.startsWith('data:')) {
    const link = document.createElement('a');
    link.href = url;
    const extension = url.includes('svg') ? 'svg' : 'png';
    link.download = `${cleanSubject}_syllabus.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showDownloadNotification('Syllabus downloaded successfully!');
    return;
  }
  
  // For local/remote image URLs
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.blob();
    })
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      // Get filename from URL or use default
      const filename = url.split('/').pop() || `${cleanSubject}_syllabus.jpg`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      showDownloadNotification('Syllabus downloaded successfully!');
    })
    .catch(error => {
      console.error('Error downloading syllabus:', error);
      // Fallback: open in new tab
      window.open(url, '_blank');
      showDownloadNotification('Opening in new tab. Right-click to save.', true);
    });
}

function showDownloadNotification(message, isWarning = false) {
  const msg = document.createElement('div');
  msg.textContent = message;
  msg.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: ${isWarning ? '#ff7864' : '#d4a843'};
    color: #1a0e00;
    padding: 12px 24px;
    border-radius: 40px;
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: fadeOut 3s forwards;
    pointer-events: none;
  `;
  document.body.appendChild(msg);
  setTimeout(() => {
    if (msg && msg.remove) msg.remove();
  }, 3000);
}

function showSection(id) {
  if (!id) return;
  activeSection = id;

  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((b) => b.classList.remove("active"));
  const currentNav = document.getElementById(`nb${id}`);
  if (currentNav) currentNav.classList.add("active");

  const s = SECTIONS[id - 1];
  if (!s) {
    console.error(`Section ${id} not found`);
    showWelcome();
    return;
  }

  const syllabusImg = getConfiguredSyllabusImage(id);

  let unitsHtml = "";
  if (s.units && s.units.length) {
    s.units.forEach((u, i) => {
      const pdfUrl = getConfiguredPdfUrl(id, i);
      if (pdfUrl && pdfUrl !== "") {
        unitsHtml += `
          <div class="unit-card" onclick="openViewer('${pdfUrl}','pdf','${escapeHtml(s.subject)} – Unit ${i + 1}')">
            <div class="unit-num">
              <span class="unit-num-text">Unit ${String(i + 1).padStart(2, "0")}</span>
              <div class="unit-dot"></div>
            </div>
            <div class="unit-body">
              <div class="unit-name">${escapeHtml(u)}</div>
              <span class="unit-cta">▶ Open PDF</span>
            </div>
          </div>`;
      } else {
        unitsHtml += `
          <div class="unit-card disabled" style="opacity:0.6; cursor:not-allowed;">
            <div class="unit-num">
              <span class="unit-num-text">Unit ${String(i + 1).padStart(2, "0")}</span>
              <div class="unit-dot"></div>
            </div>
            <div class="unit-body">
              <div class="unit-name">${escapeHtml(u)}</div>
              <span class="unit-cta" style="color:#888;">🔒 Coming Soon</span>
            </div>
          </div>`;
      }
    });
  } else {
    unitsHtml =
      '<div class="error-message">No units available for this section.</div>';
  }

  const panel = document.getElementById("panel");
  if (panel) {
    panel.innerHTML = `
      <div>
        <div class="section-header">
          <span class="section-title">${escapeHtml(s.subject)}</span>
          <button class="btn-back" onclick="showWelcome()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back
          </button>
        </div>

        <div class="syllabus-3d">
          <div class="syllabus-inner">
            <div class="syllabus-img-wrap" onclick="openViewer('${syllabusImg}','image','Syllabus – ${escapeHtml(s.subject)}')">
              <img src="${syllabusImg}" alt="Syllabus" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 200\'%3E%3Crect width=\'400\' height=\'200\' fill=\'%23275b73\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'white\' font-size=\'18\'%3ENo Syllabus Image%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="syllabus-info">
              <h3>Course Syllabus</h3>
              <div style="display: flex; gap: 8px; margin-top: 5px; flex-wrap: wrap;">
                <span class="open-tag" onclick="event.stopPropagation(); openViewer('${syllabusImg}','image','Syllabus – ${escapeHtml(s.subject)}')">👁 View</span>
                <span class="open-tag" onclick="event.stopPropagation(); downloadSyllabus('${syllabusImg}', '${escapeHtml(s.subject)}')">⬇ Download</span>
              </div>
            </div>
          </div>
        </div>

        <div class="units-label">Study Units — ${s.units ? s.units.length : 0} Modules</div>
        <div class="units-grid">${unitsHtml}</div>
      </div>`;
  }
}

function openViewer(url, type, title) {
  const vTitle = document.getElementById("vTitle");
  const vBody = document.getElementById("vBody");
  const viewer = document.getElementById("viewer");

  if (vTitle) vTitle.textContent = title;
  if (vBody) {
    vBody.innerHTML = "";
    if (type === "image") {
      vBody.style.background = "#1a2a36";
      const w = document.createElement("div");
      w.className = "img-wrap";
      const img = document.createElement("img");
      img.src = url;
      img.onerror = function () {
        this.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23275b73'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='16'%3EImage not available%3C/text%3E%3C/svg%3E";
      };
      img.oncontextmenu = () => false;
      img.draggable = false;
      w.appendChild(img);
      vBody.appendChild(w);
    } else {
      vBody.style.background = "#fff";
      const fr = document.createElement("iframe");
      fr.src = url;
      fr.onerror = function () {
        vBody.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:1rem;color:#666;"><span style="font-size:3rem;">📄</span><p>PDF failed to load. The file might be missing or inaccessible.</p><small style="color:#999;">Please check the file path or contact support.</small></div>';
      };
      fr.oncontextmenu = () => false;
      vBody.appendChild(fr);
    }
    vBody.oncontextmenu = () => false;
  }
  if (viewer) {
    viewer.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeViewer() {
  const viewer = document.getElementById("viewer");
  const vBody = document.getElementById("vBody");
  if (viewer) viewer.classList.remove("active");
  if (vBody) vBody.innerHTML = "";
  document.body.style.overflow = "";
}

// Event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeViewer();
    closeModal();
  }
});

// Password input enter key
const pwdInput = document.getElementById("pwdIn");
if (pwdInput) {
  pwdInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") tryUnlock();
  });
}

// Make functions global
window.openViewer = openViewer;
window.closeViewer = closeViewer;
window.showWelcome = showWelcome;
window.tryUnlock = tryUnlock;
window.closeModal = closeModal;
window.downloadSyllabus = downloadSyllabus;

// Initialize
buildNav();
showWelcome();
