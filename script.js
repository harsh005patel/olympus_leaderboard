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
        // Edit column names here:
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
// Format: [value1, value2, ...] matching columns above
// ============================================

const sportsData = {
    // ----------------------------------------
    // CRICKET DATA
    // Columns: Rank, Team, W, L, D, NRR, Pts
    // ----------------------------------------
    cricket: {
        poolA: [
            { team: "Phoenix Titans", data: [3, 0, 0, "+1.250", 6] },
            { team: "Thunder Hawks", data: [2, 1, 0, "+0.450", 4] },
            { team: "Royal Knights", data: [1, 2, 0, "-0.320", 2] },
            { team: "Storm Breakers", data: [0, 3, 0, "-1.380", 0] }
        ],
        poolB: [
            { team: "Dragon Warriors", data: [2, 0, 1, "+0.980", 5] },
            { team: "Lion Kings", data: [2, 1, 0, "+0.620", 4] },
            { team: "Eagle Strikers", data: [1, 2, 0, "-0.150", 2] },
            { team: "Wolf Pack", data: [0, 2, 1, "-1.450", 1] }
        ]
    },

    // ----------------------------------------
    // FOOTBALL DATA
    // Columns: Rank, Team, W, L, D, GD, Pts
    // ----------------------------------------
    football: {
        poolA: [
            { team: "Phoenix Titans", data: [2, 0, 1, "+5", 7] },
            { team: "Thunder Hawks", data: [2, 1, 0, "+2", 6] },
            { team: "Royal Knights", data: [1, 2, 0, "-2", 3] },
            { team: "Storm Breakers", data: [0, 2, 1, "-5", 1] }
        ],
        poolB: [
            { team: "Dragon Warriors", data: [3, 0, 0, "+7", 9] },
            { team: "Lion Kings", data: [1, 1, 1, "0", 4] },
            { team: "Eagle Strikers", data: [1, 2, 0, "-3", 3] },
            { team: "Wolf Pack", data: [0, 2, 1, "-4", 1] }
        ]
    },

    // ----------------------------------------
    // VOLLEYBALL DATA
    // Columns: Rank, Team, W, L, SR, Pts
    // ----------------------------------------
    volleyball: {
        poolA: [
            { team: "Thunder Hawks", data: [3, 0, "4.50", 9] },
            { team: "Phoenix Titans", data: [2, 1, "1.75", 6] },
            { team: "Storm Breakers", data: [1, 2, "0.57", 3] },
            { team: "Royal Knights", data: [0, 3, "0.22", 0] }
        ],
        poolB: [
            { team: "Eagle Strikers", data: [2, 1, "1.60", 6] },
            { team: "Lion Kings", data: [2, 1, "1.75", 6] },
            { team: "Dragon Warriors", data: [1, 2, "0.71", 3] },
            { team: "Wolf Pack", data: [1, 2, "0.50", 3] }
        ]
    },

    // ----------------------------------------
    // BASKETBALL DATA
    // Columns: Rank, Team, W, L, PD, Pts
    // ----------------------------------------
    basketball: {
        poolA: [
            { team: "Storm Breakers", data: [3, 0, "+47", 6] },
            { team: "Phoenix Titans", data: [2, 1, "+15", 4] },
            { team: "Thunder Hawks", data: [1, 2, "-17", 2] },
            { team: "Royal Knights", data: [0, 3, "-45", 0] }
        ],
        poolB: [
            { team: "Wolf Pack", data: [2, 1, "+18", 4] },
            { team: "Lion Kings", data: [2, 1, "+12", 4] },
            { team: "Dragon Warriors", data: [2, 1, "+7", 4] },
            { team: "Eagle Strikers", data: [0, 3, "-37", 0] }
        ]
    },

    // ----------------------------------------
    // TABLE TENNIS DATA
    // Columns: Rank, Team, W, L, GD, Pts
    // ----------------------------------------
    tabletennis: {
        poolA: [
            { team: "Royal Knights", data: [3, 0, "+9", 6] },
            { team: "Phoenix Titans", data: [2, 1, "+3", 4] },
            { team: "Thunder Hawks", data: [1, 2, "-3", 2] },
            { team: "Storm Breakers", data: [0, 3, "-9", 0] }
        ],
        poolB: [
            { team: "Dragon Warriors", data: [3, 0, "+9", 6] },
            { team: "Eagle Strikers", data: [2, 1, "+3", 4] },
            { team: "Wolf Pack", data: [1, 2, "-4", 2] },
            { team: "Lion Kings", data: [0, 3, "-8", 0] }
        ]
    },

    // ----------------------------------------
    // BADMINTON DATA
    // Columns: Rank, Team, W, L, GD, Pts
    // ----------------------------------------
    badminton: {
        poolA: [
            { team: "Phoenix Titans", data: [2, 1, "+3", 4] },
            { team: "Thunder Hawks", data: [2, 1, "+2", 4] },
            { team: "Royal Knights", data: [1, 2, "-2", 2] },
            { team: "Storm Breakers", data: [1, 2, "-3", 2] }
        ],
        poolB: [
            { team: "Lion Kings", data: [3, 0, "+7", 6] },
            { team: "Dragon Warriors", data: [2, 1, "+2", 4] },
            { team: "Eagle Strikers", data: [1, 2, "-3", 2] },
            { team: "Wolf Pack", data: [0, 3, "-6", 0] }
        ]
    },

    // ----------------------------------------
    // CARROM DATA
    // Columns: Rank, Team, W, L, D, Pts
    // ----------------------------------------
    carrom: {
        poolA: [
            { team: "Thunder Hawks", data: [2, 0, 1, 5] },
            { team: "Phoenix Titans", data: [2, 1, 0, 4] },
            { team: "Royal Knights", data: [1, 1, 1, 3] },
            { team: "Storm Breakers", data: [0, 3, 0, 0] }
        ],
        poolB: [
            { team: "Dragon Warriors", data: [2, 1, 0, 4] },
            { team: "Eagle Strikers", data: [2, 1, 0, 4] },
            { team: "Lion Kings", data: [1, 1, 1, 3] },
            { team: "Wolf Pack", data: [0, 2, 1, 1] }
        ]
    },

    // ----------------------------------------
    // CHESS DATA
    // Columns: Rank, Team, W, L, D, Pts
    // ----------------------------------------
    chess: {
        poolA: [
            { team: "Royal Knights", data: [2, 0, 1, 5] },
            { team: "Phoenix Titans", data: [2, 1, 0, 4] },
            { team: "Thunder Hawks", data: [1, 1, 1, 3] },
            { team: "Storm Breakers", data: [0, 3, 0, 0] }
        ],
        poolB: [
            { team: "Lion Kings", data: [3, 0, 0, 6] },
            { team: "Eagle Strikers", data: [1, 0, 2, 4] },
            { team: "Dragon Warriors", data: [1, 2, 0, 2] },
            { team: "Wolf Pack", data: [0, 3, 0, 0] }
        ]
    },

    // ----------------------------------------
    // RELAY DATA
    // Columns: Rank, Team, G (Gold), S (Silver), B (Bronze), Pts
    // ----------------------------------------
    relay: {
        poolA: [
            { team: "Storm Breakers", data: [2, 1, 0, 11] },
            { team: "Phoenix Titans", data: [1, 2, 1, 9] },
            { team: "Thunder Hawks", data: [1, 1, 1, 7] },
            { team: "Royal Knights", data: [0, 0, 2, 2] }
        ],
        poolB: [
            { team: "Dragon Warriors", data: [2, 2, 0, 12] },
            { team: "Lion Kings", data: [1, 1, 2, 8] },
            { team: "Eagle Strikers", data: [1, 1, 0, 6] },
            { team: "Wolf Pack", data: [0, 0, 2, 2] }
        ]
    }
};

// ============================================
// TEAM LOGOS - Edit image URLs here
// ============================================

const teamLogos = {
    "Phoenix Titans": "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=100&h=100&fit=crop",
    "Thunder Hawks": "https://images.unsplash.com/photo-1611457194403-d3f8c6dde14d?w=100&h=100&fit=crop",
    "Royal Knights": "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=100&h=100&fit=crop",
    "Storm Breakers": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=100&h=100&fit=crop",
    "Dragon Warriors": "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=100&h=100&fit=crop",
    "Lion Kings": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=100&h=100&fit=crop",
    "Eagle Strikers": "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=100&h=100&fit=crop",
    "Wolf Pack": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=100&h=100&fit=crop"
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
