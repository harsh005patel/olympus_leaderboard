/**
 * OLYMPUS 2026 - Sports Fest Leaderboard
 * ========================================
 * EASY TO EDIT: Just change the values below!
 * Points are auto-calculated: W×2 + D×1
 */

// ============================================
// SPORT CONFIGURATIONS
// Edit column names here for each sport
// ============================================

const sportConfigs = {
    cricket: {
        title: "Cricket Championship",
        columns: ["Rank", "Team", "P", "W", "L", "NRR", "Pts"]
    },
    football: {
        title: "Football League",
        columns: ["Rank", "Team", "P", "W", "L", "GD", "Pts"]
    },
    volleyball: {
        title: "Volleyball Tournament",
        columns: ["Rank", "Team", "P", "W", "L", "PD", "Pts"]
    },
    basketball: {
        title: "Basketball Championship",
        columns: ["Rank", "Team", "P", "W", "L", "PD", "Pts"],
        comingSoon: true
    },
    tabletennis: {
        title: "Table Tennis Championship",
        columns: ["Rank", "Team", "P", "W", "L", "GD", "Pts"]
    },
    badminton: {
        title: "Badminton Championship",
        columns: ["Rank", "Team", "P", "W", "L", "Pts"]
    },
    carrom: {
        title: "Carrom Tournament",
        columns: ["Rank", "Team", "P", "W", "L", "GD", "Pts"]
    },
    chess: {
        title: "Chess Championship",
        columns: ["Rank", "Team", "P", "W", "L", "GD", "Pts"]
    },
    relay: {
        title: "Relay Racing",
        columns: ["Rank", "Team", "P", "G", "S", "B", "Pts"],
        comingSoon: true
    }
};

// ============================================
// TEAM DATA - EDIT VALUES HERE!
// Points are AUTO-CALCULATED (W×2 + D×1)
// No need to add Pts manually!
// Pool A: Desert Fighters, Fiery Falcons, Los Galacticos, Ocean Giants
// Pool B: Invictus Aerie, Eternity Warriors, Trident Titans, Phoenix Clan
// ============================================

const sportsData = {
    // ----------------------------------------
    // CRICKET DATA
    // Columns: W, L, NRR
    // Add "qualified: true" to mark a team as qualified!
    // ----------------------------------------
    cricket: {
        poolA: [
            { team: "Desert Fighters", data: [0, 2, "-7.50"], qualified: false },
            { team: "Fiery Falcons", data: [0, 1, "-1.20"], qualified: false },
            { team: "Los Galacticos", data: [1, 1, "0.88"], qualified: false },
            { team: "Ocean Giants", data: [3, 0, "3.17"], qualified: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 2, "-2.14"], qualified: false, eliminated: true },
            { team: "Eternity Warriors", data: [2, 0, "3.28"], qualified: false },
            { team: "Trident Titans", data: [1, 1, "-0.88"], qualified: false },
            { team: "Phoenix Clan", data: [1, 1, "0.13"], qualified: false }
        ]
    },

    // ----------------------------------------
    // FOOTBALL DATA
    // Columns: W, L, GD
    // ----------------------------------------
    football: {
        poolA: [
            { team: "Desert Fighters", data: [0, 2, -2], eliminated: true },
            { team: "Fiery Falcons", data: [0, 2, -1], eliminated: true },
            { team: "Los Galacticos", data: [2, 0, 0], qualified: true },
            { team: "Ocean Giants", data: [2, 0, 3], qualified: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [1, 1, 0] },
            { team: "Eternity Warriors", data: [1, 1, 2] },
            { team: "Trident Titans", data: [2, 1, 0], qualified: true },
            { team: "Phoenix Clan", data: [1, 2, -2], eliminated: true }
        ]
    },

    // ----------------------------------------
    // VOLLEYBALL DATA
    // Columns: W, L
    // ----------------------------------------
    volleyball: {
        poolA: [
            { team: "Desert Fighters", data: [2, 1, "15"], qualified: true },
            { team: "Fiery Falcons", data: [0, 3, "-33"], eliminated: true },
            { team: "Los Galacticos", data: [3, 0, "36"], qualified: true },
            { team: "Ocean Giants", data: [1, 2, "-18"], eliminated: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 3, "-35"], eliminated: true },
            { team: "Eternity Warriors", data: [2, 1, "-2"], qualified: true },
            { team: "Trident Titans", data: [1, 2, "-11"], eliminated: true },
            { team: "Phoenix Clan", data: [3, 0, "48"], qualified: true }
        ]
    },

    // ----------------------------------------
    // BASKETBALL DATA
    // Columns: W, L, PD
    // ----------------------------------------
    basketball: {
        poolA: [
            { team: "Desert Fighters", data: [3, 0, "-"] },
            { team: "Fiery Falcons", data: [0, 2, "-"] },
            { team: "Los Galacticos", data: [1, 2, "-"] },
            { team: "Ocean Giants", data: [1, 1, "-"] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 2, "-"] },
            { team: "Eternity Warriors", data: [1, 1, "-"] },
            { team: "Trident Titans", data: [1, 1, "-"] },
            { team: "Phoenix Clan", data: [2, 0, "-"] }
        ]
    },

    // ----------------------------------------
    // TABLE TENNIS DATA
    // Columns: W, L
    // ----------------------------------------
    tabletennis: {
        poolA: [
            { team: "Desert Fighters", data: [0, 3, "-"], eliminated: true },
            { team: "Fiery Falcons", data: [1, 2, "-"], eliminated: true },
            { team: "Los Galacticos", data: [2, 1, "-"], qualified: true },
            { team: "Ocean Giants", data: [3, 0, "-"], qualified: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [1, 2, "-3"], eliminated: true },
            { team: "Eternity Warriors", data: [3, 0, "11"], qualified: true },
            { team: "Trident Titans", data: [2, 1, "7"], qualified: true },
            { team: "Phoenix Clan", data: [0, 3, "-15"], eliminated: true }
        ]
    },

    // ----------------------------------------
    // BADMINTON DATA
    // Columns: W, L
    // ----------------------------------------
    badminton: {
        poolA: [
            { team: "Desert Fighters", data: [2, 0], qualified: true },
            { team: "Fiery Falcons", data: [0, 3] },
            { team: "Los Galacticos", data: [1, 2] },
            { team: "Ocean Giants", data: [2, 0], qualified: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [1, 1] },
            { team: "Eternity Warriors", data: [0, 0] },
            { team: "Trident Titans", data: [0, 2] },
            { team: "Phoenix Clan", data: [2, 0] }
        ]
    },

    // ----------------------------------------
    // CARROM DATA
    // Columns: W, L, D
    // ----------------------------------------
    carrom: {
        poolA: [
            { team: "Desert Fighters", data: [1, 1, "-"] },
            { team: "Fiery Falcons", data: [1, 1, "-"] },
            { team: "Los Galacticos", data: [0, 2, "-"] },
            { team: "Ocean Giants", data: [2, 0, "-"] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [2, 0, "-"] },
            { team: "Eternity Warriors", data: [1, 1, "-"] },
            { team: "Trident Titans", data: [0, 2, "-"] },
            { team: "Phoenix Clan", data: [1, 1, "-"] }
        ]
    },

    // ----------------------------------------
    // CHESS DATA
    // Columns: W, L
    // ----------------------------------------
    chess: {
        poolA: [
            { team: "Desert Fighters", data: [0, 3, "-"], eliminated: true },
            { team: "Fiery Falcons", data: [2, 1, "-"], qualified: true },
            { team: "Los Galacticos", data: [1, 2, "-"], eliminated: true },
            { team: "Ocean Giants", data: [3, 0, "-"], qualified: true }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [1, 0, "-"] },
            { team: "Eternity Warriors", data: [1, 0, "-"] },
            { team: "Trident Titans", data: [0, 2, "-"] },
            { team: "Phoenix Clan", data: [1, 1, "-"] }
        ]
    },

    // ----------------------------------------
    // RELAY DATA
    // Columns: G (Gold), S (Silver), B (Bronze)
    // ----------------------------------------
    relay: {
        poolA: [
            { team: "Desert Fighters", data: [0, 0, 0] },
            { team: "Fiery Falcons", data: [0, 0, 0] },
            { team: "Los Galacticos", data: [0, 0, 0] },
            { team: "Ocean Giants", data: [0, 0, 0] }
        ],
        poolB: [
            { team: "Invictus Aerie", data: [0, 0, 0] },
            { team: "Eternity Warriors", data: [0, 0, 0] },
            { team: "Trident Titans", data: [0, 0, 0] },
            { team: "Phoenix Clan", data: [0, 0, 0] }
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
let showingOverall = false;

function init() {
    setupEventListeners();
    renderLeaderboards(currentSport);
    renderOverallLeaderboard();
}

function setupEventListeners() {
    const sportCards = document.querySelectorAll('.sport-card');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sportGrid = document.getElementById('sportGrid');
    const selectedSportName = document.getElementById('selectedSportName');
    const overallBtn = document.getElementById('overallBtn');

    // Overall leaderboard button
    if (overallBtn) {
        overallBtn.addEventListener('click', () => {
            showingOverall = !showingOverall;
            overallBtn.classList.toggle('active', showingOverall);

            document.getElementById('sportContent').style.display = showingOverall ? 'none' : '';
            document.getElementById('overallContent').style.display = showingOverall ? '' : 'none';
            document.getElementById('sportMenu').style.display = showingOverall ? 'none' : '';

            if (showingOverall) {
                renderOverallLeaderboard();
            }
        });
    }

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            sportGrid.classList.toggle('active');
        });
    }

    sportCards.forEach(card => {
        card.addEventListener('click', () => {
            // If overall is showing, switch back to sport view
            if (showingOverall) {
                showingOverall = false;
                if (overallBtn) overallBtn.classList.remove('active');
                document.getElementById('sportContent').style.display = '';
                document.getElementById('overallContent').style.display = 'none';
                document.getElementById('sportMenu').style.display = '';
            }

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

    // Show/hide coming soon notice
    const comingSoonEl = document.getElementById('comingSoonNotice');
    if (comingSoonEl) {
        comingSoonEl.style.display = config.comingSoon ? 'block' : 'none';
    }

    renderTableHeader('poolAHead', config);
    renderTableHeader('poolBHead', config);
    renderTableHeader('generalHead', config);

    renderTableBody('poolABody', data.poolA, config, sport);
    renderTableBody('poolBBody', data.poolB, config, sport);
    renderGeneralLeaderboard('generalBody', data, config, sport);
    renderColumnLegend(config, sport);

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

function renderTableBody(bodyId, teams, config, sport) {
    const tbody = document.getElementById(bodyId);
    tbody.innerHTML = '';

    // Sort teams by auto-computed points in descending order
    const sortedTeams = [...teams].sort((a, b) => compareTeams(a, b, config));

    sortedTeams.forEach((teamData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = generateRowHTML(teamData, index + 1, config);
        tbody.appendChild(row);
    });
}

function renderGeneralLeaderboard(bodyId, data, config, sport) {
    const tbody = document.getElementById(bodyId);
    tbody.innerHTML = '';

    // Combine both pools
    const allTeams = [...data.poolA, ...data.poolB];

    // Sort by auto-computed points
    const sortedTeams = [...allTeams].sort((a, b) => compareTeams(a, b, config));

    sortedTeams.forEach((teamData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = generateGeneralRowHTML(teamData, index + 1, config);
        tbody.appendChild(row);
    });
}

// Auto-compute matches played: W + L + D
function computeMatchesPlayed(teamData, config) {
    const w = Number(teamData.data[0]) || 0;
    const l = Number(teamData.data[1]) || 0;
    const dColIndex = config.columns.indexOf("D");
    let d = 0;
    if (dColIndex !== -1) {
        const dDataIndex = dColIndex - 3; // skip Rank, Team, P
        d = Number(teamData.data[dDataIndex]) || 0;
    }
    return w + l + d;
}

// Auto-compute points: W×2 + D×1
function computePoints(teamData, config) {
    const w = Number(teamData.data[0]) || 0;
    const dColIndex = config.columns.indexOf("D");
    let d = 0;
    if (dColIndex !== -1) {
        const dDataIndex = dColIndex - 3; // skip Rank, Team, P
        d = Number(teamData.data[dDataIndex]) || 0;
    }
    return (w * 2) + d;
}

// Compare two teams for sorting (Points -> Tie Breaker)
function compareTeams(a, b, config) {
    const pointsA = computePoints(a, config);
    const pointsB = computePoints(b, config);

    if (pointsB !== pointsA) {
        return pointsB - pointsA; // Primary: Points descending
    }

    // Tiebreaker: Check for NRR, GD, or PD column
    const tieBreakers = ["NRR", "GD", "PD"];
    const tieColIndex = config.columns.findIndex(col => tieBreakers.includes(col));

    if (tieColIndex !== -1) {
        // Calculate data index: colIndex - 3 (Rank, Team, P)
        const dataIdx = tieColIndex - 3;
        const valA = parseFloat(a.data[dataIdx]) || 0;
        const valB = parseFloat(b.data[dataIdx]) || 0;
        return valB - valA; // Higher value wins
    }

    return 0;
}

function generateRowHTML(teamData, rank, config) {
    const logo = teamLogos[teamData.team] || '';
    const isQualified = teamData.qualified === true;
    const isEliminated = teamData.eliminated === true;
    const qualifiedBadge = isQualified ? '<span class="qualified-badge">Q</span>' : '';
    const eliminatedBadge = isEliminated ? '<span class="eliminated-badge">E</span>' : '';
    let html = '';

    // Rank column
    html += `<td><span class="rank-badge rank-${rank}">${rank}</span></td>`;

    // Team column with logo and optional badges
    html += `<td class="team-col"><div class="team-cell"><img src="${logo}" alt="${teamData.team}" class="team-logo" onerror="this.style.display='none'"><span class="team-name">${teamData.team}</span>${qualifiedBadge}${eliminatedBadge}</div></td>`;

    // Matches Played column
    html += `<td>${computeMatchesPlayed(teamData, config)}</td>`;

    // Data columns (W, L, D, NRR etc. — everything in the data array)
    teamData.data.forEach((value) => {
        html += `<td>${value}</td>`;
    });

    // Auto-computed Points column
    html += `<td class="points">${computePoints(teamData, config)}</td>`;

    return html;
}

function generateGeneralRowHTML(teamData, rank, config) {
    const logo = teamLogos[teamData.team] || '';
    let html = '';

    // Rank column
    html += `<td><span class="rank-badge rank-${rank}">${rank}</span></td>`;

    // Team column WITHOUT qualified badge
    html += `<td class="team-col"><div class="team-cell"><img src="${logo}" alt="${teamData.team}" class="team-logo" onerror="this.style.display='none'"><span class="team-name">${teamData.team}</span></div></td>`;

    // Matches Played column
    html += `<td>${computeMatchesPlayed(teamData, config)}</td>`;

    // Data columns
    teamData.data.forEach((value) => {
        html += `<td>${value}</td>`;
    });

    // Auto-computed Points column
    html += `<td class="points">${computePoints(teamData, config)}</td>`;

    return html;
}

// Compute combined points across ALL sports for each team
function computeOverallPoints(teamName) {
    let totalPoints = 0;
    const allTeamNames = [
        "Desert Fighters", "Fiery Falcons", "Los Galacticos", "Ocean Giants",
        "Invictus Aerie", "Eternity Warriors", "Trident Titans", "Phoenix Clan"
    ];

    for (const sport in sportsData) {
        const config = sportConfigs[sport];
        const sportData = sportsData[sport];
        const allTeams = [...sportData.poolA, ...sportData.poolB];
        const team = allTeams.find(t => t.team === teamName);
        if (team) {
            totalPoints += computePoints(team, config);
        }
    }
    return 0;
}

function renderOverallLeaderboard() {
    const thead = document.getElementById('overallHead');
    const tbody = document.getElementById('overallBody');

    // Header
    thead.innerHTML = '';
    const headerRow = document.createElement('tr');
    ["Rank", "Team", "Total Pts"].forEach(col => {
        const th = document.createElement('th');
        th.textContent = col;
        th.className = col === 'Team' ? 'team-col' : '';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Gather all team names
    const teamNames = [
        "Desert Fighters", "Fiery Falcons", "Los Galacticos", "Ocean Giants",
        "Invictus Aerie", "Eternity Warriors", "Trident Titans", "Phoenix Clan"
    ];

    // Compute overall points and sort
    const teamPoints = teamNames.map(name => ({
        team: name,
        totalPts: computeOverallPoints(name)
    })).sort((a, b) => b.totalPts - a.totalPts);

    // Render rows
    tbody.innerHTML = '';
    teamPoints.forEach((tp, index) => {
        const rank = index + 1;
        const logo = teamLogos[tp.team] || '';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="rank-badge rank-${rank}">${rank}</span></td>
            <td class="team-col"><div class="team-cell"><img src="${logo}" alt="${tp.team}" class="team-logo" onerror="this.style.display='none'"><span class="team-name">${tp.team}</span></div></td>
            <td class="points">${tp.totalPts}</td>
        `;
        tbody.appendChild(row);
    });
}

// Column abbreviation definitions
const columnDefinitions = {
    "P": "Matches Played",
    "Q": "Qualified",
    "E": "Eliminated",
    "W": "Wins",
    "L": "Losses",
    "D": "Draws",
    "Pts": "Points (W×2)",
    "NRR": "Net Run Rate",
    "GD": { football: "Goal Difference", default: "Game Difference" },
    "PD": { volleyball: "Point Difference", basketball: "Point Difference", default: "Point Difference" },
    "G": "Gold",
    "S": "Silver",
    "B": "Bronze"
};

function renderColumnLegend(config, sport) {
    const legendEl = document.getElementById('columnLegend');
    if (!legendEl) return;

    // Filter only data columns (skip Rank and Team)
    const dataCols = config.columns.filter(c => c !== 'Rank' && c !== 'Team');

    const items = dataCols.map(col => {
        const def = columnDefinitions[col];
        let meaning = '';
        if (typeof def === 'string') {
            meaning = def;
        } else if (def) {
            meaning = def[sport] || def.default || '';
        }
        return `<span class="legend-item"><strong>${col}</strong> : ${meaning}</span>`;
    });

    // Manually add Q and E as they aren't in the columns array
    items.push(`<span class="legend-item"><strong>Q</strong> : Qualified</span>`);
    items.push(`<span class="legend-item"><strong>E</strong> : Eliminated</span>`);

    legendEl.innerHTML = items.join('<span class="legend-separator">|</span>');
}

document.addEventListener('DOMContentLoaded', init);
