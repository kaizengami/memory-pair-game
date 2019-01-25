import './CongratulationSlide.sass';

const container = document.getElementById('container');

const slide = {
    victory: {
        text : 'Well Done!',
        style : 'score-page-victory'
    },
    defeat: {
        text : 'Game Over',
        style : 'score-page-defeat'
    }
}

const congratulationSlide = (result) => {
    return `<div id="score-page" class="${result.style}">
                <div class="score-page-congratulation">${result.text}</div>
            </div>`;
}

const gameResult = (result) => {
    switch (result) {
        case 'victory': return slide.victory;
        case 'defeat': return slide.defeat;
    }
}

const render = (result) => {
    container.insertAdjacentHTML('beforeend', congratulationSlide(gameResult(result)));
    const scorePage = document.getElementById('score-page');
    scorePage.addEventListener('animationend', () => { 
        scorePage.classList.add('score-page-rebound');
    });
}

export default render;
