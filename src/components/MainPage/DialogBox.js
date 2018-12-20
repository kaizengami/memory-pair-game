import './DialogBox.sass';

const container = document.getElementById('container');


const dialog = (avatar, dialog_box, button_ok ) => {
    return `<div id="dialog">${avatar}${dialog_box}${button_ok}</div>`;
}

const dialog_box = (dialog_box_avatar_name, dialog_box_text) => {
    return `<div class="dialog-box">${dialog_box_avatar_name}${dialog_box_text}</div>`;
}
  
const dialog_box_avatar = () => {
    return `<div class="dialog-box-avatar"></div>`;
}

const dialog_box_avatar_name = (name) => {
    return `<div class="dialog-box-avatar-name">${name}</div>`;
}

const dialog_box_text = (text) => {
    return `<div class="dialog-box-text">${text}</div>`;
}

const button_ok = () => {
    return `<div class="dialog-box-button">ok</div>`;
}

const addButtonClickEvent = () => {
    const button = document.getElementsByClassName('dialog-box-button')[0];
    button.addEventListener('click', () => { applyButton() });
}

const applyButton = () => {
    const dialog = document.getElementById('dialog');
    dialog.classList.add('dialog-hide');
}

const Render = () => {
    const cap_text = "Hey, sergeant! You are in the alpha version of the game,<br>so you can't save a princess or lost your life.<br>She will wait for you in next update.";
    const render_html = dialog(dialog_box_avatar(), dialog_box(dialog_box_avatar_name('Capitan'), dialog_box_text(cap_text)), button_ok());
    container.insertAdjacentHTML('beforeend', render_html);
    addButtonClickEvent();
}

export default Render;