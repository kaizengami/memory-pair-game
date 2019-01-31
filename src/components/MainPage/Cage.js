import './Cage.sass';
import { showBlood } from './Blood';
import sundtrack from '../Sound';

const CAGE_LIFE = 220;
const BROKEN_CHAIN = 90;

const cage = () => {
    return `<div id="cage">${cageAndAiri() + brokenChain()}</div>`;
}

const cageAndAiri = () => {
    return `<div class="cage-airi"></div>`;
}

const brokenChain = () => {
    return `<div class="cage-broken-chain"></div>`;
}

const showCage = () => {
    const cage = document.querySelector('#cage');
    cage.style.setProperty('--cage-margin-top', '-220px');
    sundtrack.effect('chain-down.mp3');
}

const cageDown = () => {
    const cage = document.querySelector('#cage');
    let marginTop = parseInt(cage.style.getPropertyValue('--cage-margin-top'));
    let damage = (CAGE_LIFE - BROKEN_CHAIN) * 0.2;
    cage.style.setProperty('--cage-margin-top', marginTop + damage + 'px');
    sundtrack.effect('chain-down.mp3');
    playHeartbeatIfLowHealth();
}

const cageGameOver = () => {
    sundtrack.effect('chain-down-game-over.mp3');
    lowerDownMax();
    breakChain();
}

const lowerDownMax = () => {
    const cage = document.querySelector('#cage');
    cage.style.setProperty('--cage-margin-top', 0);
}

const breakChain = () => {
    const cage = document.querySelector('#cage');
    const cageAiri = document.querySelector('.cage-airi');
    cage.addEventListener('transitionend', {
        handleEvent: function (e) {
            cageAiri.classList.add('cage-airi-game-over');
            sundtrack.effect('girl-scream.mp3');
            cage.removeEventListener(e.type, this, false);
            cageAiri.addEventListener('transitionend', () => {
                sundtrack.effect('body-hit-ground.mp3');
                showBlood();
            }); 
        }       
    });
}

const playHeartbeatIfLowHealth = () => {
    const airiHealth = document.querySelector('.battleground-stats-airi');
    let health = parseInt(airiHealth.style.getPropertyValue('--stats-airi-health'));
    if (health <= 20 && health > 0) sundtrack.effect('heartbeat.mp3');
}

const render = () => {
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', cage());    
}

export { render as renderCage, showCage, cageDown, cageGameOver };
