import './Blood.sass';

const blood = () => {
    return `<div id="blood">${bloodImage()}</div>`;
}

const bloodImage = () => {
    return `<div class="blood-image"></div>`;
}

const showBlood = () => {
    const blood = document.getElementById('blood');
    blood.classList.add('blood-show');
}

const render = () => {
    const container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend', blood());    
}

export { render as renderBlood, showBlood };
