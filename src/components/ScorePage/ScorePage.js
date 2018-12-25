import './ScorePage.sass';

const container = document.getElementById('container');

const scorePage = (congratulation) => {
    return `<div id="score-page">
                <div class="score-page-congratulation">${congratulation}</div>
            </div>`;
}

const render = (congratulation) => {
    container.insertAdjacentHTML('beforeend', scorePage(congratulation));
    const score_page = document.getElementById('score-page');
    score_page.addEventListener('animationend', () => { 
        score_page.classList.add('score-page-rebound');
    });

}

export default render;