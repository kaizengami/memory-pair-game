import './DifficultyMenu.sass';
import MainPage from '../MainPage/MainPage';
import BlackScreen from '../PageTransition/BlackScreenTransition';

const game_difficulty_menu = () => {
    return `<div class="difficulty-menu">
                <button class="difficulty-name difficulty-disabled" value="easy">Easy</button>
                <button class="difficulty-name" value="normal">Normal</button>
                <button class="difficulty-name difficulty-disabled" value="hard">Hard</button>
            </div>`
}
  
const render = () => {
    const container = document.getElementById('container');
    return container.insertAdjacentHTML('beforeend', game_difficulty_menu());
}

const addClickEvent = () => {
    const buttons = document.querySelectorAll('.difficulty-name');
    buttons.forEach( button => {
        button.addEventListener('click', () => { applyDifficulty(button.value) });
    });
}

const applyDifficulty = (difficulty) => {
    pageTransitionEffect();
    return console.log(difficulty);
}

const pageTransitionEffect = () => {
    const menu = document.getElementsByClassName('difficulty-menu')[0];
    menu.classList.add('difficulty-menu-transition');
    BlackScreen.toBlack();
}

const RenderDifficultyMenu = () => {
    render();
    addClickEvent();
}

export default RenderDifficultyMenu;