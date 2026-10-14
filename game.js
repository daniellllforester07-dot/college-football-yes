// ==========================================
// 1. FULL 138 D1 FBS TEAMS DATABASE
// ==========================================
const ALL_138_TEAMS = [
  // SEC
  { name: "Georgia", conf: "SEC", prestige: 98, nilBudget: 2500000 },
  { name: "Alabama", conf: "SEC", prestige: 96, nilBudget: 2300000 },
  { name: "Texas", conf: "SEC", prestige: 95, nilBudget: 2600000 },
  { name: "LSU", conf: "SEC", prestige: 92, nilBudget: 2100000 },
  { name: "Tennessee", conf: "SEC", prestige: 90, nilBudget: 1900000 },
  { name: "Ole Miss", conf: "SEC", prestige: 88, nilBudget: 1800000 },
  { name: "Missouri", conf: "SEC", prestige: 85, nilBudget: 1500000 },
  { name: "Oklahoma", conf: "SEC", prestige: 91, nilBudget: 2000000 },
  { name: "Texas A&M", conf: "SEC", prestige: 87, nilBudget: 2400000 },
  { name: "Florida", conf: "SEC", prestige: 86, nilBudget: 1700000 },
  { name: "Auburn", conf: "SEC", prestige: 84, nilBudget: 1600000 },
  { name: "Kentucky", conf: "SEC", prestige: 78, nilBudget: 1200000 },
  { name: "South Carolina", conf: "SEC", prestige: 79, nilBudget: 1300000 },
  { name: "Arkansas", conf: "SEC", prestige: 77, nilBudget: 1200000 },
  { name: "Mississippi State", conf: "SEC", prestige: 76, nilBudget: 1100000 },
  { name: "Vanderbilt", conf: "SEC", prestige: 68, nilBudget: 900000 },

  // BIG TEN
  { name: "Ohio State", conf: "Big Ten", prestige: 97, nilBudget: 2500000 },
  { name: "Oregon", conf: "Big Ten", prestige: 94, nilBudget: 2200000 },
  { name: "Penn State", conf: "Big Ten", prestige: 91, nilBudget: 1900000 },
  { name: "Michigan", conf: "Big Ten", prestige: 93, nilBudget: 2100000 },
  { name: "USC", conf: "Big Ten", prestige: 89, nilBudget: 2000000 },
  { name: "Washington", conf: "Big Ten", prestige: 86, nilBudget: 1600000 },
  { name: "Iowa", conf: "Big Ten", prestige: 83, nilBudget: 1400000 },
  { name: "Wisconsin", conf: "Big Ten", prestige: 82, nilBudget: 1400000 },
  { name: "Nebraska", conf: "Big Ten", prestige: 80, nilBudget: 1600000 },
  { name: "UCLA", conf: "Big Ten", prestige: 79, nilBudget: 1500000 },
  { name: "Michigan State", conf: "Big Ten", prestige: 78, nilBudget: 1300000 },
  { name: "Minnesota", conf: "Big Ten", prestige: 76, nilBudget: 1100000 },
  { name: "Maryland", conf: "Big Ten", prestige: 75, nilBudget: 1100000 },
  { name: "Illinois", conf: "Big Ten", prestige: 74, nilBudget: 1000000 },
  { name: "Rutgers", conf: "Big Ten", prestige: 71, nilBudget: 950000 },
  { name: "Purdue", conf: "Big Ten", prestige: 72, nilBudget: 1000000 },
  { name: "Indiana", conf: "Big Ten", prestige: 77, nilBudget: 1200000 },
  { name: "Northwestern", conf: "Big Ten", prestige: 70, nilBudget: 900000 },

  // ACC
  { name: "Clemson", conf: "ACC", prestige: 92, nilBudget: 1900000 },
  { name: "Florida State", conf: "ACC", prestige: 89, nilBudget: 1800000 },
  { name: "Miami (FL)", conf: "ACC", prestige: 87, nilBudget: 2000000 },
  { name: "Louisville", conf: "ACC", prestige: 81, nilBudget: 1300000 },
  { name: "NC State", conf: "ACC", prestige: 80, nilBudget: 1200000 },
  { name: "SMU", conf: "ACC", prestige: 78, nilBudget: 1800000 },
  { name: "Virginia Tech", conf: "ACC", prestige: 79, nilBudget: 1200000 },
  { name: "North Carolina", conf: "ACC", prestige: 79, nilBudget: 1300000 },
  { name: "Duke", conf: "ACC", prestige: 77, nilBudget: 1100000 },
  { name: "Georgia Tech", conf: "ACC", prestige: 75, nilBudget: 1000000 },
  { name: "Pittsburgh", conf: "ACC", prestige: 77, nilBudget: 1100000 },
  { name: "Syracuse", conf: "ACC", prestige: 73, nilBudget: 950000 },
  { name: "California", conf: "ACC", prestige: 72, nilBudget: 900000 },
  { name: "Stanford", conf: "ACC", prestige: 73, nilBudget: 1000000 },
  { name: "Boston College", conf: "ACC", prestige: 72, nilBudget: 900000 },
  { name: "Wake Forest", conf: "ACC", prestige: 71, nilBudget: 850000 },
  { name: "Virginia", conf: "ACC", prestige: 70, nilBudget: 850000 },

  // BIG 12
  { name: "Utah", conf: "Big 12", prestige: 87, nilBudget: 1500000 },
  { name: "Kansas State", conf: "Big 12", prestige: 84, nilBudget: 1300000 },
  { name: "Oklahoma State", conf: "Big 12", prestige: 83, nilBudget: 1300000 },
  { name: "Arizona", conf: "Big 12", prestige: 80, nilBudget: 1200000 },
  { name: "Kansas", conf: "Big 12", prestige: 78, nilBudget: 1200000 },
  { name: "Iowa State", conf: "Big 12", prestige: 79, nilBudget: 1100000 },
  { name: "West Virginia", conf: "Big 12", prestige: 78, nilBudget: 1100000 },
  { name: "TCU", conf: "Big 12", prestige: 81, nilBudget: 1400000 },
  { name: "Texas Tech", conf: "Big 12", prestige: 79, nilBudget: 1500000 },
  { name: "UCF", conf: "Big 12", prestige: 78, nilBudget: 1200000 },
  { name: "Colorado", conf: "Big 12", prestige: 82, nilBudget: 1700000 },
  { name: "BYU", conf: "Big 12", prestige: 80, nilBudget: 1300000 },
  { name: "Baylor", conf: "Big 12", prestige: 77, nilBudget: 1200000 },
  { name: "Houston", conf: "Big 12", prestige: 73, nilBudget: 1000000 },
  { name: "Arizona State", conf: "Big 12", prestige: 76, nilBudget: 1100000 },
  { name: "Cincinnati", conf: "Big 12", prestige: 75, nilBudget: 1000000 },

  // PAC-12 / INDEPENDENTS
  { name: "Notre Dame", conf: "Independents", prestige: 95, nilBudget: 2300000 },
  { name: "Washington State", conf: "Pac-12", prestige: 76, nilBudget: 950000 },
  { name: "Oregon State", conf: "Pac-12", prestige: 76, nilBudget: 950000 },
  { name: "Boise State", conf: "Pac-12", prestige: 82, nilBudget: 1200000 },
  { name: "Fresno State", conf: "Pac-12", prestige: 74, nilBudget: 850000 },
  { name: "San Diego State", conf: "Pac-12", prestige: 73, nilBudget: 850000 },
  { name: "Colorado State", conf: "Pac-12", prestige: 70, nilBudget: 800000 },
  { name: "Utah State", conf: "Pac-12", prestige: 67, nilBudget: 700000 },
  { name: "UConn", conf: "Independents", prestige: 60, nilBudget: 500000 },
  { name: "UMass", conf: "Independents", prestige: 55, nilBudget: 400000 },

  // GROUP OF 5 (AAC, SUN BELT, MWC, MAC, C-USA)
  { name: "Memphis", conf: "AAC", prestige: 75, nilBudget: 1000000 },
  { name: "Tulane", conf: "AAC", prestige: 76, nilBudget: 1000000 },
  { name: "UTSA", conf: "AAC", prestige: 74, nilBudget: 850000 },
  { name: "USF", conf: "AAC", prestige: 73, nilBudget: 900000 },
  { name: "Appalachian State", conf: "Sun Belt", prestige: 75, nilBudget: 850000 },
  { name: "James Madison", conf: "Sun Belt", prestige: 76, nilBudget: 900000 },
  { name: "Troy", conf: "Sun Belt", prestige: 72, nilBudget: 750000 },
  { name: "Liberty", conf: "C-USA", prestige: 74, nilBudget: 1100000 },
  { name: "UNLV", conf: "MWC", prestige: 73, nilBudget: 900000 },
  { name: "Toledo", conf: "MAC", prestige: 71, nilBudget: 700000 },
  { name: "Miami (OH)", conf: "MAC", prestige: 70, nilBudget: 650000 },
  { name: "Kennesaw State", conf: "C-USA", prestige: 55, nilBudget: 400000 }
];

// Fill out remaining G5 teams dynamically to complete 138 programs
const G5_NAMES = [
  "East Carolina", "FAU", "Rice", "North Texas", "UAB", "Tulsa", "Temple", "Charlotte", "Navy", "Army",
  "Air Force", "Wyoming", "San Jose State", "Hawaii", "Nevada", "New Mexico", "Coastal Carolina", "Louisiana",
  "South Alabama", "Texas State", "Georgia Southern", "Marshall", "Old Dominion", "Georgia State", "Arkansas State",
  "Southern Miss", "UL Monroe", "Northern Illinois", "Ohio", "Western Michigan", "Central Michigan", "Bowling Green",
  "Eastern Michigan", "Buffalo", "Ball State", "Akron", "Kent State", "Western Kentucky", "Jacksonville State",
  "Sam Houston", "Middle Tennessee", "Louisiana Tech", "New Mexico State", "FIU", "UTEP", "Delaware", "Missouri State"
];

G5_NAMES.forEach(n => {
  ALL_138_TEAMS.push({ name: n, conf: "G5 Conf", prestige: 55 + Math.floor(Math.random()*15), nilBudget: 400000 + Math.floor(Math.random()*300000) });
});

// ==========================================
// 2. CONSTANTS & SYSTEM CONFIG
// ==========================================
const DEV_TRAITS = ["Normal", "Impact", "Star", "Elite"];
const POSITIONS = {
  QB: { archetypes: ["Field General", "Dual Threat", "Gunslinger"] },
  RB: { archetypes: ["Elusive Back", "Power Back", "Receiving"] },
  WR: { archetypes: ["Deep Threat", "Slot Receiver", "Physical"] },
  DE: { archetypes: ["Speed Rusher", "Power Rusher"] },
  CB: { archetypes: ["Zone Coverage", "Man Coverage"] }
};

const DEALBREAKERS = ["Playing Time", "Championship Contender", "Pro Pipeline", "NIL Valuation"];
const PIPELINES = ["East Texas", "South Florida", "Georgia Coast", "Southern Cal", "Midwest Big10"];
const NAMES = ["Malachi", "Jaxson", "Caleb", "Jayden", "Trevor", "Deacon", "Quinn", "Kyler", "Marcus", "Travis"];
const LASTS = ["Sanders", "Hunter", "Stroud", "Manning", "Dart", "Milroe", "Ewers", "Beck", "Carter", "Washington"];

let dynasty = {
  userTeam: null,
  season: 2026,
  week: 1,
  totalHours: 600,
  availableHours: 600,
  nilBudget: 0,
  prospects: [],
  commits: [],
  roster: [],
  wireLogs: []
};

// ==========================================
// 3. CORE FUNCTIONS
// ==========================================
window.onload = function() {
  const select = document.getElementById('team-select');
  const sorted = [...ALL_138_TEAMS].sort((a,b) => a.name.localeCompare(b.name));
  
  sorted.forEach(t => {
    let opt = document.createElement('option');
    opt.value = t.name;
    opt.innerText = `${t.name} (${t.conf} - Prestige: ${t.prestige})`;
    select.appendChild(opt);
  });
};

function startDynasty() {
  const selectedName = document.getElementById('team-select').value;
  dynasty.userTeam = ALL_138_TEAMS.find(t => t.name === selectedName);
  
  dynasty.totalHours = 400 + (dynasty.userTeam.prestige * 3);
  dynasty.availableHours = dynasty.totalHours;
  dynasty.nilBudget = dynasty.userTeam.nilBudget;

  document.getElementById('user-team-display').innerText = `${dynasty.userTeam.name} (${dynasty.userTeam.conf})`;
  document.getElementById('setup-modal').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  generateRoster();
  generateProspects();
  updateUI();
  logWire(`Dynasty Mode Active! Head Coach takes charge of ${dynasty.userTeam.name}.`);
}

function generateRoster() {
  const classes = ["Fr", "So", "Jr", "Sr"];
  const posKeys = Object.keys(POSITIONS);
  for(let i = 0; i < 22; i++) {
    dynasty.roster.push({
      name: `${NAMES[Math.floor(Math.random()*NAMES.length)]} ${LASTS[Math.floor(Math.random()*LASTS.length)]}`,
      pos: posKeys[Math.floor(Math.random()*posKeys.length)],
      year: classes[Math.floor(Math.random()*classes.length)],
      ovr: 68 + Math.floor(Math.random()*24),
      devTrait: DEV_TRAITS[Math.floor(Math.random()*DEV_TRAITS.length)]
    });
  }
}

function generateProspects() {
  dynasty.prospects = [];
  const posKeys = Object.keys(POSITIONS);

  for (let i = 0; i < 30; i++) {
    let starRand = Math.random();
    let stars = starRand > 0.88 ? 5 : starRand > 0.60 ? 4 : starRand > 0.28 ? 3 : 2;
    let baseOvr = stars === 5 ? 80 : stars === 4 ? 74 : stars === 3 ? 68 : 62;

    let gemRoll = Math.random();
    let status = gemRoll > 0.88 ? "Gem" : gemRoll < 0.12 ? "Bust" : "Normal";
    let actualOvr = status === "Gem" ? baseOvr + 5 : status === "Bust" ? baseOvr - 6 : baseOvr + Math.floor(Math.random() * 4);

    let traitRoll = Math.random();
    let trait = stars === 5 ? (traitRoll > 0.5 ? "Star" : "Elite") : (traitRoll > 0.8 ? "Star" : traitRoll > 0.4 ? "Impact" : "Normal");

    let pos = posKeys[Math.floor(Math.random() * posKeys.length)];
    let archs = POSITIONS[pos].archetypes;

    dynasty.prospects.push({
      id: i,
      name: `${NAMES[Math.floor(Math.random()*NAMES.length)]} ${LASTS[Math.floor(Math.random()*LASTS.length)]}`,
      pos: pos,
      archetype: archs[Math.floor(Math.random()*archs.length)],
      stars: stars,
      estOvr: baseOvr,
      trueOvr: actualOvr,
      devTrait: trait,
      scouted: false,
      gemStatus: status,
      pipeline: PIPELINES[Math.floor(Math.random()*PIPELINES.length)],
      dealbreaker: DEALBREAKERS[Math.floor(Math.random()*DEALBREAKERS.length)],
      nilDemand: stars * 100000 + Math.floor(Math.random()*150000),
      nilOffered: false,
      userLockPct: Math.floor(Math.random() * 10) + 5,
      aiLockPct: Math.floor(Math.random() * 15) + 5,
      committed: false,
      attributes: {
        SPD: 70 + Math.floor(Math.random()*28),
        ACC: 70 + Math.floor(Math.random()*25),
        AWR: 60 + Math.floor(Math.random()*30),
        STR: 60 + Math.floor(Math.random()*30),
        THP: pos === 'QB' ? 80 + Math.floor(Math.random()*18) : 50
      }
    });
  }
}

function inspectRecruit(id) {
  let p = dynasty.prospects.find(x => x.id === id);
  if (!p) return;

  const modalBody = document.getElementById('scout-card-body');

  let statusBadge = p.scouted 
    ? (p.gemStatus === "Gem" ? "<span class='gem'>💎 GEM (+5 OVR)</span>" : p.gemStatus === "Bust" ? "<span class='bust'>🚨 BUST (-6 OVR)</span>" : "Normal Prospect") 
    : "🔒 Unscouted";

  modalBody.innerHTML = `
    <h2>${p.name} <span class="stars">${"★".repeat(p.stars)}</span></h2>
    <p style="color:var(--text-muted); margin-bottom:10px;">${p.pos} | ${p.archetype} | Pipeline: ${p.pipeline}</p>
    <p style="color:var(--text-muted); margin-bottom:15px;">Dealbreaker: <span style="color:var(--accent-red)">${p.dealbreaker}</span></p>

    <div style="margin: 15px 0;">
      <strong>Scout Status:</strong> ${statusBadge}<br>
      <strong>Rating:</strong> ${p.scouted ? `True OVR: ${p.trueOvr}` : `Est. OVR: ${p.estOvr}`}<br>
      <strong>Dev Trait:</strong> ${p.scouted ? `<span class="trait-${p.devTrait}">${p.devTrait}</span>` : '🔒 Unscouted'}<br>
      <strong>NIL Demand:</strong> <span style="color:var(--accent-green)">$${p.nilDemand.toLocaleString()}</span>
    </div>

    <div class="attr-grid">
      <div class="attr-box"><span>SPEED</span><strong>${p.scouted ? p.attributes.SPD : '??'}</strong></div>
      <div class="attr-box"><span>ACCEL</span><strong>${p.scouted ? p.attributes.ACC : '??'}</strong></div>
      <div class="attr-box"><span>AWARENESS</span><strong>${p.scouted ? p.attributes.AWR : '??'}</strong></div>
      <div class="attr-box"><span>STRENGTH</span><strong>${p.scouted ? p.attributes.STR : '??'}</strong></div>
      <div class="attr-box"><span>THROW PWR</span><strong>${p.scouted ? p.attributes.THP : '??'}</strong></div>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:20px;">
      ${!p.scouted ? `<button class="primary-btn" onclick="scoutRecruit(${p.id})">Scout (50 Hrs)</button>` : ''}
      <button class="primary-btn" onclick="pitchRecruit(${p.id}, 50, 'Send House')">Send The House (50 Hrs)</button>
      <button class="primary-btn" style="background:#059669" onclick="pitchRecruit(${p.id}, 40, 'Hard Sell')">Hard Sell (40 Hrs)</button>
      ${!p.nilOffered ? `<button class="primary-btn" style="background:var(--accent-purple)" onclick="offerNIL(${p.id})">Offer NIL Deal ($${p.nilDemand.toLocaleString()})</button>` : ''}
    </div>
  `;
  document.getElementById('scout-modal').classList.remove('hidden');
}

function scoutRecruit(id) {
  let p = dynasty.prospects.find(x => x.id === id);
  if (dynasty.availableHours < 50) { alert("Not enough hours!"); return; }
  dynasty.availableHours -= 50;
  p.scouted = true;
  logWire(`Scouted ${p.name}. Revealed rating: ${p.trueOvr} OVR, Dev Trait: ${p.devTrait}.`);
  inspectRecruit(id);
  updateUI();
}

function pitchRecruit(id, hours, pitchType) {
  let p = dynasty.prospects.find(x => x.id === id);
  if (dynasty.availableHours < hours) { alert("Not enough hours!"); return; }
  dynasty.availableHours -= hours;
  let gain = Math.floor((hours / 4) * (1 + dynasty.userTeam.prestige / 100));
  p.userLockPct = Math.min(100, p.userLockPct + gain);
  logWire(`[${pitchType}] Executed for ${p.name}. Progress +${gain}%`);
  closeModal();
  updateUI();
}

function offerNIL(id) {
  let p = dynasty.prospects.find(x => x.id === id);
  if (dynasty.nilBudget < p.nilDemand) { alert("Insufficient NIL Treasury!"); return; }
  dynasty.nilBudget -= p.nilDemand;
  p.nilOffered = true;
  p.userLockPct = Math.min(100, p.userLockPct + 35);
  logWire(`💰 NIL DEAL SIGNED! Offered $${p.nilDemand.toLocaleString()} to ${p.name}. Lock +35%!`);
  closeModal();
  updateUI();
}

function closeModal() { document.getElementById('scout-modal').classList.add('hidden'); }

function advanceWeek() {
  dynasty.week++;
  dynasty.availableHours = dynasty.totalHours;

  dynasty.prospects.forEach(p => {
    if (p.committed) return;
    p.aiLockPct += Math.floor(Math.random() * 10) + 3;

    if (p.userLockPct >= 100) {
      p.committed = true;
      dynasty.commits.push(p);
      logWire(`🎉 SIGNED! ${p.stars}-Star ${p.name} (${p.pos}) has committed!`);
    } else if (p.aiLockPct >= 100) {
      p.committed = true;
      logWire(`❌ LOST RECRUIT: ${p.name} signed with another school.`);
    }
  });

  updateUI();
}

function switchTab(evt, tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

  evt.currentTarget.classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.remove('hidden');
}

function logWire(msg) { dynasty.wireLogs.unshift(`[Wk ${dynasty.week}] ${msg}`); }

function updateUI() {
  document.getElementById('week-txt').innerText = `Week ${dynasty.week}`;
  document.getElementById('hours-txt').innerText = `${dynasty.availableHours} / ${dynasty.totalHours}`;
  document.getElementById('nil-txt').innerText = `$${dynasty.nilBudget.toLocaleString()}`;
  document.getElementById('commits-txt').innerText = dynasty.commits.length;
  document.getElementById('commit-count-side').innerText = dynasty.commits.length;

  let classPts = dynasty.commits.reduce((sum, c) => sum + (c.stars * 10) + (c.scouted ? c.trueOvr : c.estOvr), 0);
  let rankEst = classPts > 300 ? "#3" : classPts > 150 ? "#18" : classPts > 50 ? "#45" : "#89";
  document.getElementById('rank-txt').innerText = rankEst;

  // Render Target Table
  const tbody = document.getElementById('targets-tbody');
  tbody.innerHTML = "";
  dynasty.prospects.filter(p => !p.committed).forEach(p => {
    let tr = document.createElement('tr');
    tr.onclick = () => inspectRecruit(p.id);

    let ovrDisplay = p.scouted 
      ? (p.gemStatus === "Gem" ? `<span class="gem">${p.trueOvr} 💎</span>` : p.gemStatus === "Bust" ? `<span class="bust">${p.trueOvr} 🚨</span>` : p.trueOvr) 
      : `${p.estOvr}?`;

    tr.innerHTML = `
      <td class="stars">${"★".repeat(p.stars)}</td>
      <td><strong>${p.name}</strong> ${p.nilOffered ? '💵' : ''}</td>
      <td>${p.pos}</td>
      <td>${p.archetype}</td>
      <td><strong>${ovrDisplay}</strong></td>
      <td>${p.scouted ? `<span class="trait-${p.devTrait}">${p.devTrait}</span>` : '🔒 Unscouted'}</td>
      <td><span style="color:var(--accent-red)">${p.dealbreaker}</span></td>
      <td>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${p.userLockPct}%"></div>
          <span class="progress-text">${p.userLockPct}%</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Render Roster Table
  const rosterBody = document.getElementById('roster-tbody');
  rosterBody.innerHTML = "";
  dynasty.roster.forEach(r => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.year}</td>
      <td><strong>${r.name}</strong></td>
      <td>${r.pos}</td>
      <td><strong>${r.ovr}</strong></td>
      <td><span class="trait-${r.devTrait}">${r.devTrait}</span></td>
      <td>Athletic Growth</td>
    `;
    rosterBody.appendChild(tr);
  });

  // Render Commit List
  const commitList = document.getElementById('commit-list');
  commitList.innerHTML = "";
  dynasty.commits.forEach(c => {
    let li = document.createElement('li');
    let ovrVal = c.scouted ? c.trueOvr : c.estOvr;
    li.innerHTML = `🟢 <strong>${c.name}</strong> (${c.pos}) - ${c.stars}★ [OVR ${ovrVal}]`;
    commitList.appendChild(li);
  });

  document.getElementById('wire-log').innerHTML = dynasty.wireLogs.map(l => `<p>${l}</p>`).join('');
}
