import './Cage.sass';

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
}

const cageDown = () => {
    const cage = document.querySelector('#cage');
    let marginTop = parseInt(cage.style.getPropertyValue('--cage-margin-top'));
    let damage = (CAGE_LIFE - BROKEN_CHAIN) * 0.2;
    cage.style.setProperty('--cage-margin-top', marginTop + damage + 'px');
}

const breakChain = () => {

}

const render = () => {
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', cage());    
}

export { render as renderCage, showCage, cageDown };
