import './BattlegroundStats.sass';

let health = {
    airi : 100,
    you : 101
}

const container = document.getElementById('container');

const stats = () => {
    return `<div id="battleground-stats">${statsImage()}</div>`;
}

const statsImage = () => {
    return `<div class="battleground-stats-image">${healthAiri() + healthPlayer()}</div>`;
}

const healthAiri = () => {
    return `<div class="battleground-stats-airi"></div>`;
}

const healthPlayer = () => {
    return `<div class="battleground-stats-player"></div>`;
}

const updateStats = (airiDamage, playerDamage) => {
    if (airiDamage) airiReduceLife();
    if (playerDamage) playerReduceLife();
}

const airiReduceLife = () => {
    //const statsPlayer = document.querySelector('.battleground-stats-player');
    const statsAiri = document.querySelector('.battleground-stats-airi');
    health.airi = health.airi - 20;
    statsAiri.style.setProperty('--stats-airi-health', health.airi + '%');
}

const checkStats = () => {
    if (health.airi === 0 || health.player === 0) return 'dead';
}

const resetStats = () => {
    health.airi = 100;
    health.player = 101;
}

const render = () => {
    container.insertAdjacentHTML('beforeend', stats());
}

export { render as renderBattlegroundStats, updateStats, resetStats, checkStats };
