
// ╔══════════════════════════════════════════════════════════════════╗
// ║          USER FILE CONFIGURATION — EDIT THIS SECTION           ║
// ║  Add your own syllabus images and PDF file paths here          ║
// ╚══════════════════════════════════════════════════════════════════╝
//
//  HOW TO ADD FILES:
//  ─────────────────────────────────────────────────────────────────
//  • syllabusImages  → one image per section (1 to 6)
//    - Use a relative path : "folder/syllabus.jpg"
//    - Use an absolute URL : "https://example.com/img.png"
//    - Use a data URL      : "data:image/png;base64,..."
//
//  • pdfFiles        → 5 PDFs per section  (unitIndex 0 – 4)
//    - Use a relative path : "Section1/unit1.pdf"
//    - Use an absolute URL : "https://example.com/file.pdf"
//    - Keep the HTML file in the SAME folder as your PDF files
//      so relative paths resolve correctly in a browser.
//  ─────────────────────────────────────────────────────────────────

const USER_CONFIG = {

  // ── SYLLABUS IMAGES (one per section) ──────────────────────────
  syllabusImages: {
    1: "s2.jpeg",
    2: "s1.jpeg",
    3: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%231f7a8c'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E💻 COMPUTER SCIENCE%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EAlgorithms, Data Structures, AI%3C/text%3E%3C/svg%3E",
    4: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%238b5a2b'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E📖 LITERATURE SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EPoetry, Prose, Drama%3C/text%3E%3C/svg%3E",
    5: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%234a5d23'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E🏛️ HISTORY SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EAncient, Medieval, Modern%3C/text%3E%3C/svg%3E",
    6: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%239c6e3e'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFE6B3' font-size='22'%3E📊 ECONOMICS SYLLABUS%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDFFA9' font-size='14'%3EMicro, Macro, Trade%3C/text%3E%3C/svg%3E"
  },

  // ── PDF FILES (5 units per section, unitIndex 0 = Unit 1) ──────
  pdfFiles: {
    // ── Section 1 : Mathematics ─────────────────────────────────
    1: {
      0: "resume.pdf",                                                              // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    },
    // ── Section 2 : Physics ─────────────────────────────────────
    2: {
      0: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",          // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    },
    // ── Section 3 : Computer Science ────────────────────────────
    3: {
      0: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",          // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    },
    // ── Section 4 : Literature ──────────────────────────────────
    4: {
      0: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",          // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    },
    // ── Section 5 : History ─────────────────────────────────────
    5: {
      0: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",          // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    },
    // ── Section 6 : Economics ───────────────────────────────────
    6: {
      0: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",          // Unit 1
      1: "https://www.orimi.com/pdf-test.pdf",                                                // Unit 2
      2: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",              // Unit 3
      3: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",            // Unit 4
      4: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf"                   // Unit 5
    }
  }
};

// ╔══════════════════════════════════════════════════════════════════╗
// ║              END OF USER CONFIGURATION                         ║
// ╚══════════════════════════════════════════════════════════════════╝

// Helper: resolve PDF URL from USER_CONFIG (falls back to demo PDFs)
const FALLBACK_PDFS = [
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "https://www.orimi.com/pdf-test.pdf",
  "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/helloworld.pdf",
  "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
  "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/tables.pdf",
];
function getConfiguredPdfUrl(sectionId, unitIndex) {
  return (USER_CONFIG.pdfFiles[sectionId] && USER_CONFIG.pdfFiles[sectionId][unitIndex])
    ? USER_CONFIG.pdfFiles[sectionId][unitIndex]
    : FALLBACK_PDFS[unitIndex % FALLBACK_PDFS.length];
}

// Helper: resolve syllabus image from USER_CONFIG (falls back to SVG placeholder)
function getConfiguredSyllabusImage(sectionId) {
  if (USER_CONFIG.syllabusImages[sectionId]) return USER_CONFIG.syllabusImages[sectionId];
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect width='400' height='200' fill='#275b73'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='18'>Section ${sectionId} Syllabus</text></svg>`
  )}`;
}

/* ── SECTION META ── */
const SECTIONS = [
  { id:1, label:'Math',    icon:'math',    color:'#6ab4ff', subject:'Mathematics',   sub:'Calculus · Algebra · Statistics',   units:['Calculus','Algebra','Statistics','Trigonometry','Geometry'] },
  { id:2, label:'Physics', icon:'physics', color:'#78dca0', subject:'Physics',        sub:'Mechanics · Thermo · Optics',       units:['Mechanics','Thermodynamics','Optics','Electro','Quantum'] },
  { id:3, label:'CS',      icon:'cs',      color:'#ffb450', subject:'Computer Sci.',  sub:'Algorithms · Data · AI',            units:['Algorithms','Data Structs','Networks','Databases','AI/ML'] },
  { id:4, label:'Lit',     icon:'lit',     color:'#dc78c8', subject:'Literature',     sub:'Poetry · Prose · Drama',            units:['Poetry','Prose','Drama','Criticism','Comparative'] },
  { id:5, label:'History', icon:'hist',    color:'#50c8e6', subject:'History',        sub:'Ancient · Medieval · Modern',       units:['Ancient','Medieval','Renaissance','Modern','Contemporary'] },
  { id:6, label:'Econ',    icon:'econ',    color:'#ff7864', subject:'Economics',      sub:'Micro · Macro · Finance',           units:['Microeconomics','Macroeconomics','Trade','Finance','Policy'] },
];

const PASSWORDS = {1:'pass1',2:'pass2',3:'pass3',4:'pass4',5:'pass5',6:'pass6'};
const UNLOCKED = {};
let activeSection = null;
let pendingId = null;

/* ── STARS ── */
(function(){
  const c=document.getElementById('stars');
  for(let i=0;i<80;i++){
    const s=document.createElement('span');
    const sz=Math.random()*2+0.5;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*4}s;--del:${Math.random()*4}s;`;
    c.appendChild(s);
  }
})();

/* ── NAV ICONS ── */
const NAV_ICONS = {
  math:   `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
  physics:`<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>`,
  cs:     `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  lit:    `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  hist:   `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  econ:   `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
};

/* ── BUILD NAV ── */
function buildNav(){
  const nav=document.getElementById('bottom-nav');
  SECTIONS.forEach((s,i)=>{
    const btn=document.createElement('button');
    btn.className=`nav-btn s${s.id}`;
    btn.id=`nb${s.id}`;
    btn.innerHTML=`
      <div class="nav-icon-wrap">
        <svg class="nav-svg" viewBox="0 0 24 24">${NAV_ICONS[s.icon]}</svg>
        ${UNLOCKED[s.id]?'':`<span class="nav-badge">🔒</span>`}
      </div>
      <span class="nav-label">${s.label}</span>`;
    btn.onclick=(e)=>handleNav(s.id,e,btn);
    nav.appendChild(btn);
  });
}

/* ── HANDLE NAV CLICK ── */
function handleNav(id,e,btn){
  /* ripple */
  const r=document.createElement('div');r.className='ripple';
  const rect=btn.getBoundingClientRect();
  r.style.left=`${e.clientX-rect.left}px`;r.style.top=`${e.clientY-rect.top}px`;
  btn.appendChild(r);setTimeout(()=>r.remove(),600);

  if(UNLOCKED[id]){showSection(id);}
  else{openModal(id);}
}

/* ── MODAL ── */
function openModal(id){
  pendingId=id;
  const s=SECTIONS[id-1];
  document.getElementById('mHint').textContent=`🔒 ${s.subject} — Enter password`;
  document.getElementById('pwdIn').value='';
  document.getElementById('errMsg').textContent='';
  document.getElementById('modal').classList.add('active');
  setTimeout(()=>document.getElementById('pwdIn').focus(),200);
}
function closeModal(){
  document.getElementById('modal').classList.remove('active');
  pendingId=null;
}
function tryUnlock(){
  const pwd=document.getElementById('pwdIn').value;
  if(PASSWORDS[pendingId]===pwd){
    UNLOCKED[pendingId]=true;
    /* remove badge */
    const badge=document.querySelector(`#nb${pendingId} .nav-badge`);
    if(badge)badge.remove();
    closeModal();
    showSection(pendingId);
  } else {
    document.getElementById('errMsg').textContent=`❌ Wrong password. Hint: pass${pendingId}`;
    document.getElementById('pwdIn').value='';
    document.getElementById('pwdIn').focus();
  }
}
document.getElementById('pwdIn').addEventListener('keypress',e=>{if(e.key==='Enter')tryUnlock();});

/* ── SHOW WELCOME ── */
function showWelcome(){
  activeSection=null;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel').innerHTML=`
    <div class="welcome">
      <div class="vault-3d">
        <div class="vault-cube">
          <div class="face front">📚</div><div class="face back">🔐</div>
          <div class="face left">📖</div><div class="face right">✨</div>
          <div class="face top">🏆</div><div class="face bottom">🎓</div>
        </div>
      </div>
      <h2>Welcome to Study Vault</h2>
      <p>Six secure sections protected by individual passwords. Tap a subject below to get started.</p>
      <div class="key-pill">🔑 Default passwords: pass1 – pass6</div>
    </div>`;
}

/* ── SHOW SECTION ── */


const UNIT_ICONS=['📐','⚗️','💻','🖊️','🗿','💹'];

function showSection(id){
  activeSection=id;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(`nb${id}`).classList.add('active');

  const s=SECTIONS[id-1];
  const icon=UNIT_ICONS[id-1];
  const syllabusImg=getConfiguredSyllabusImage(id);

  let unitsHtml='';
  s.units.forEach((u,i)=>{
    const pdfUrl=getConfiguredPdfUrl(id,i);
    unitsHtml+=`
      <div class="unit-card" onclick="openViewer('${pdfUrl}','pdf','${s.subject} – Unit ${i+1}')">
        <div class="unit-num">
          <span class="unit-num-text">Unit ${String(i+1).padStart(2,'0')}</span>
          <div class="unit-dot"></div>
        </div>
        <div class="unit-body">
          <span class="unit-icon">${icon}</span>
          <div class="unit-name">${u}</div>
          <span class="unit-cta">▶ Open PDF</span>
        </div>
      </div>`;
  });

  document.getElementById('panel').innerHTML=`
    <div>
      <div class="section-header">
        <span class="section-title">${s.subject}</span>
        <button class="btn-back" onclick="showWelcome()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
      </div>

      <div class="syllabus-3d" onclick="openViewer('${syllabusImg}','image','Syllabus – ${s.subject}')">
        <div class="syllabus-inner">
          <div class="syllabus-img-wrap"><img src="${syllabusImg}" alt="Syllabus"></div>
          <div class="syllabus-info">
            <h3>Course Syllabus</h3>
            <p>${s.sub}</p>
            <span class="open-tag">👁 Tap to view securely</span>
          </div>
        </div>
      </div>

      <div class="units-label">Study Units — ${s.units.length} Modules</div>
      <div class="units-grid">${unitsHtml}</div>
    </div>`;
}

/* ── VIEWER ── */
function openViewer(url,type,title){
  document.getElementById('vTitle').textContent=title;
  const body=document.getElementById('vBody');
  body.innerHTML='';
  if(type==='image'){
    body.style.background='#1a2a36';
    const w=document.createElement('div');w.className='img-wrap';
    const img=document.createElement('img');img.src=url;
    img.oncontextmenu=()=>false;img.draggable=false;
    w.appendChild(img);body.appendChild(w);
  } else {
    body.style.background='#fff';
    const fr=document.createElement('iframe');
    fr.src=url;fr.oncontextmenu=()=>false;
    body.appendChild(fr);
  }
  body.oncontextmenu=()=>false;
  document.getElementById('viewer').classList.add('active');
  document.body.style.overflow='hidden';
}
function closeViewer(){
  document.getElementById('viewer').classList.remove('active');
  document.getElementById('vBody').innerHTML='';
  document.body.style.overflow='';
}
window.openViewer=openViewer;
window.closeViewer=closeViewer;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeViewer();closeModal();}});

/* ── INIT ── */
buildNav();
showWelcome();
