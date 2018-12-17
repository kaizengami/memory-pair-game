import './GameOptions.sass';

const GameOptions = {
    sound : false,
    fullscreen : false,
    open_menu_button : function() {
        return `<button id="game-options-button">Game options</button>`
    },
    main_menu : function() {
        return `<div id="game-options-menu">
                    <div class="game-options-checkboxs">
                        <h3>Options</h3>
                        <label class="game-options-label">
                            <input type="checkbox" checked>
                            <span>Sound</span>
                        </label>
                        <label class="game-options-label">
                            <input type="checkbox" checked>
                            Fullscreen
                        </label>
                    </div>
                    <div class="game-options-info">
                        <h3>Hotkeys</h3>
                        <p>M - Sound off/on</p>
                        <p>F - Fullscreen off/on</p>
                    </div>
                    <button id="game-options-menu-close">Close<button>
                </div>`
    },
    openMenuClickEvent : function() {
        const game_options_button = document.getElementById('game-options-button');
        game_options_button.addEventListener('click', () => { 
            const game_options_menu = document.getElementById('game-options-menu');
            const difficulty_menu = document.getElementsByClassName('difficulty-menu')[0];
            game_options_menu.classList.toggle('game-options-menu-visible');
            difficulty_menu.classList.toggle('difficulty-menu-hide');
            game_options_button.classList.toggle('difficulty-menu-hide');
        });
    },
    closeMenuClickEvent : function() {
        const game_options_menu_close = document.getElementById('game-options-menu-close');
        game_options_menu_close.addEventListener('click', () => { 
            const game_options_menu = document.getElementById('game-options-menu');
            const difficulty_menu = document.getElementsByClassName('difficulty-menu')[0];
            const game_options_button = document.getElementById('game-options-button');
            game_options_menu.classList.toggle('game-options-menu-visible');
            difficulty_menu.classList.toggle('difficulty-menu-hide');
            game_options_button.classList.toggle('difficulty-menu-hide');
        });
    },
    render : function() {
        const container = document.getElementById('container');
        container.insertAdjacentHTML('beforeend', this.open_menu_button() + this.main_menu());
        this.openMenuClickEvent();
        this.closeMenuClickEvent();
    },
}

export default GameOptions;