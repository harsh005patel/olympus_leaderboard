/**
 * OLYMPUS 2026 - Sports Fest Leaderboard
 * ========================================
 * EASY TO EDIT: Just change the values below!
 */

// ============================================
// SPORT CONFIGURATIONS
// Edit column names here for each sport
// ============================================

const sportConfigs = {
    cricket: {
        title: "Cricket Championship",
        columns: ["Rank", "Team", "W", "L", "D", "NRR", "Pts"]
    },
    football: {
        title: "Football League",
        columns: ["Rank", "Team", "W", "L", "D", "GD", "Pts"]
    },
    volleyball: {
        title: "Volleyball Tournament",
        columns: ["Rank", "Team", "W", "L", "SR", "Pts"]
    },
    basketball: {
        title: "Basketball Championship",
        columns: ["Rank", "Team", "W", "L", "PD", "Pts"]
    },
    tabletennis: {
        title: "Table Tennis Championship",
        columns: ["Rank", "Team", "W", "L", "GD", "Pts"]
    },
    badminton: {
        title: "Badminton Championship",
        columns: ["Rank", "Team", "W", "L", "GD", "Pts"]
    },
    carrom: {
        title: "Carrom Tournament",
        columns: ["Rank", "Team", "W", "L", "D", "Pts"]
    },
    chess: {
        title: "Chess Championship",
        columns: ["Rank", "Team", "W", "L", "D", "Pts"]
    },
    relay: {
        title: "Relay Racing",
        columns: ["Rank", "Team", "G", "S", "B", "Pts"]
    }
};

// ============================================
// TEAM DATA - EDIT POINTS HERE!
// Pool A: Desert Fighters, Fiery Falcons, Los Galacticos, Ocean Giants
// Pool B: Invictus Aerie, Eternity Warriors, Trident Titans, Phoenix Clan
// ============================================

const sportsData = {
    // ----------------------------------------
    // CRICKET DATA
    // Columns: Rank, Team, W, L, D, NRR, Pts
    // ----------------------------------------
    cricket: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0, "0.000", 0] },
            { team: "Fiery Falcons", data: [0, 0, 0, "0.000", 0] },
            { team: "Los Galacticos", data: [0, 0, 0, "0.000", 0] },
            { team: "Ocean Giants", data: [0, 0, 0, "0.000", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0, "0.000", 0] },
            { team: "Eternity Warriors", data: [0, 0, 0, "0.000", 0] },
            { team: "Trident Titans", data: [0, 0, 0, "0.000", 0] },
            { team: "Phoenix Clan", data: [0, 0, 0, "0.000", 0] }
        ]
    },

    // ----------------------------------------
    // FOOTBALL DATA
    // Columns: Rank, Team, W, L, D, GD, Pts
    // ----------------------------------------
    football: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0, "0", 0] },
            { team: "Fiery Falcons", data: [0, 0, 0, "0", 0] },
            { team: "Los Galacticos", data: [0, 0, 0, "0", 0] },
            { team: "Ocean Giants", data: [0, 0, 0, "0", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0, "0", 0] },
            { team: "Eternity Warriors", data: [0, 0, 0, "0", 0] },
            { team: "Trident Titans", data: [0, 0, 0, "0", 0] },
            { team: "Phoenix Clan", data: [0, 0, 0, "0", 0] }
        ]
    },

    // ----------------------------------------
    // VOLLEYBALL DATA
    // Columns: Rank, Team, W, L, SR, Pts
    // ----------------------------------------
    volleyball: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, "0.00", 0] },
            { team: "Fiery Falcons", data: [0, 0, "0.00", 0] },
            { team: "Los Galacticos", data: [0, 0, "0.00", 0] },
            { team: "Ocean Giants", data: [0, 0, "0.00", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, "0.00", 0] },
            { team: "Eternity Warriors", data: [0, 0, "0.00", 0] },
            { team: "Trident Titans", data: [0, 0, "0.00", 0] },
            { team: "Phoenix Clan", data: [0, 0, "0.00", 0] }
        ]
    },

    // ----------------------------------------
    // BASKETBALL DATA
    // Columns: Rank, Team, W, L, PD, Pts
    // ----------------------------------------
    basketball: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, "0", 0] },
            { team: "Fiery Falcons", data: [0, 0, "0", 0] },
            { team: "Los Galacticos", data: [0, 0, "0", 0] },
            { team: "Ocean Giants", data: [0, 0, "0", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, "0", 0] },
            { team: "Eternity Warriors", data: [0, 0, "0", 0] },
            { team: "Trident Titans", data: [0, 0, "0", 0] },
            { team: "Phoenix Clan", data: [0, 0, "0", 0] }
        ]
    },

    // ----------------------------------------
    // TABLE TENNIS DATA
    // Columns: Rank, Team, W, L, GD, Pts
    // ----------------------------------------
    tabletennis: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, "0", 0] },
            { team: "Fiery Falcons", data: [0, 0, "0", 0] },
            { team: "Los Galacticos", data: [0, 0, "0", 0] },
            { team: "Ocean Giants", data: [0, 0, "0", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, "0", 0] },
            { team: "Eternity Warriors", data: [0, 0, "0", 0] },
            { team: "Trident Titans", data: [0, 0, "0", 0] },
            { team: "Phoenix Clan", data: [0, 0, "0", 0] }
        ]
    },

    // ----------------------------------------
    // BADMINTON DATA
    // Columns: Rank, Team, W, L, GD, Pts
    // ----------------------------------------
    badminton: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, "0", 0] },
            { team: "Fiery Falcons", data: [0, 0, "0", 0] },
            { team: "Los Galacticos", data: [0, 0, "0", 0] },
            { team: "Ocean Giants", data: [0, 0, "0", 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, "0", 0] },
            { team: "Eternity Warriors", data: [0, 0, "0", 0] },
            { team: "Trident Titans", data: [0, 0, "0", 0] },
            { team: "Phoenix Clan", data: [0, 0, "0", 0] }
        ]
    },

    // ----------------------------------------
    // CARROM DATA
    // Columns: Rank, Team, W, L, D, Pts
    // ----------------------------------------
    carrom: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0, 0] },
            { team: "Fiery Falcons", data: [0, 0, 0, 0] },
            { team: "Los Galacticos", data: [0, 0, 0, 0] },
            { team: "Ocean Giants", data: [0, 0, 0, 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0, 0] },
            { team: "Eternity Warriors", data: [0, 0, 0, 0] },
            { team: "Trident Titans", data: [0, 0, 0, 0] },
            { team: "Phoenix Clan", data: [0, 0, 0, 0] }
        ]
    },

    // ----------------------------------------
    // CHESS DATA
    // Columns: Rank, Team, W, L, D, Pts
    // ----------------------------------------
    chess: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0, 0] },
            { team: "Fiery Falcons", data: [0, 0, 0, 0] },
            { team: "Los Galacticos", data: [0, 0, 0, 0] },
            { team: "Ocean Giants", data: [0, 0, 0, 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0, 0] },
            { team: "Eternity Warriors", data: [0, 0, 0, 0] },
            { team: "Trident Titans", data: [0, 0, 0, 0] },
            { team: "Phoenix Clan", data: [0, 0, 0, 0] }
        ]
    },

    // ----------------------------------------
    // RELAY DATA
    // Columns: Rank, Team, G (Gold), S (Silver), B (Bronze), Pts
    // ----------------------------------------
    relay: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0, 0] },
            { team: "Fiery Falcons", data: [0, 0, 0, 0] },
            { team: "Los Galacticos", data: [0, 0, 0, 0] },
            { team: "Ocean Giants", data: [0, 0, 0, 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0, 0] },
            { team: "Eternity Warriors", data: [0, 0, 0, 0] },
            { team: "Trident Titans", data: [0, 0, 0, 0] },
            { team: "Phoenix Clan", data: [0, 0, 0, 0] }
        ]
    }
};

// ============================================
// TEAM LOGOS - Using local logo files
// ============================================

const teamLogos = {
    // Pool A Teams
    "Desert Fighters": "logos/desert_fighters.png",
    "Fiery Falcons": "logos/fiery_falcons.png",
    "Los Galacticos": "logos/los_galacticos.png",
    "Ocean Giants": "logos/ocean_giants.png",
    // Pool B Teams
    "Invictus Aerie": "logos/invictus_aerie.png",
    "Eternity Warriors": "logos/eternity_warriors.png",
    "Trident Titans": "logos/trident_titans.png",
    "Phoenix Clan": "logos/phoenix_clan.png"
};

// ============================================
// APPLICATION CODE (No need to edit below)
// ============================================

let currentSport = 'cricket';

function init() {
    setupEventListeners();
    renderLeaderboards(currentSport);
}

function setupEventListeners() {
    const sportCards = document.querySelectorAll('.sport-card');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sportGrid = document.getElementById('sportGrid');
    const selectedSportName = document.getElementById('selectedSportName');

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            sportGrid.classList.toggle('active');
        });
    }

    sportCards.forEach(card => {
        card.addEventListener('click', () => {
            sportCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentSport = card.dataset.sport;

            // Update mobile menu button text
            if (selectedSportName) {
                selectedSportName.textContent = sportConfigs[currentSport].title.split(' ')[0];
            }

            // Close mobile menu after selection
            if (mobileMenuBtn && sportGrid) {
                mobileMenuBtn.classList.remove('active');
                sportGrid.classList.remove('active');
            }

            renderLeaderboards(currentSport);
        });
    });
}

function renderLeaderboards(sport) {
    const config = sportConfigs[sport];
    const data = sportsData[sport];

    document.getElementById('currentSportTitle').textContent = config.title;
    document.getElementById('currentSportTitle').classList.add('fade-in');

    renderTableHeader('poolAHead', config);
    renderTableHeader('poolBHead', config);

    renderTableBody('poolABody', data.poolA, config);
    renderTableBody('poolBBody', data.poolB, config);

    setTimeout(() => {
        document.getElementById('currentSportTitle').classList.remove('fade-in');
    }, 500);
}

function renderTableHeader(headerId, config) {
    const thead = document.getElementById(headerId);
    const headerRow = document.createElement('tr');

    config.columns.forEach((col) => {
        const th = document.createElement('th');
        th.textContent = col;
        th.className = col === 'Team' ? 'team-col' : '';
        headerRow.appendChild(th);
    });

    thead.innerHTML = '';
    thead.appendChild(headerRow);
}

function renderTableBody(bodyId, teams, config) {
    const tbody = document.getElementById(bodyId);
    tbody.innerHTML = '';

    teams.forEach((teamData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = generateRowHTML(teamData, index + 1);
        tbody.appendChild(row);
    });
}

function generateRowHTML(teamData, rank) {
    const logo = teamLogos[teamData.team] || '';
    let html = '';

    // Rank column
    html += `<td><span class="rank-badge rank-${rank}">${rank}</span></td>`;

    // Team column with logo
    html += `<td class="team-col"><div class="team-cell"><img src="${logo}" alt="${teamData.team}" class="team-logo" onerror="this.style.display='none'"><span class="team-name">${teamData.team}</span></div></td>`;

    // Data columns
    teamData.data.forEach((value, index) => {
        const isLast = index === teamData.data.length - 1;
        const cellClass = isLast ? 'points' : '';
        html += `<td class="${cellClass}">${value}</td>`;
    });

    return html;
}

document.addEventListener('DOMContentLoaded', init);
