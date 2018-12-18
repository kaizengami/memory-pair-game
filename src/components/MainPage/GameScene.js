import './GameScene.sass';

const game_scene_html = () => {
    return `<div id="game-scene">asd</div>`
}
  
const Render = () => {
    const container = document.getElementById('container');
    return container.insertAdjacentHTML('beforeend', game_scene_html());
}

export default Render;