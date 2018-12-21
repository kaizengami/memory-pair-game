import './BattlegroundBoard.sass';
import Cards from './Cards';

const container = document.getElementById('container');

const board = () => {
    return `<div id="battleground-board">${board_image()}</div>`;
}

const board_image = () => {
    return `<div class="battleground-board-image">${board_field()}</div>`;
}

const board_field = () => {
    return `<div class="battleground-board-field">${Cards()}</div>`;
}

const Render = () => {
    container.insertAdjacentHTML('beforeend', board());
}

export default Render;