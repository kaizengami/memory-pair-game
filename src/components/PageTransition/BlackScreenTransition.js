import './BlackScreenTransition.sass';

const container = document.getElementById('container');

const BlackScreenTransition = {
    blackScreenIn : '<div class="black-screen-in"></div>',
    blackScreenOut : '<div class="black-screen-out"></div>',
    toBlack : function () {
        container.insertAdjacentHTML('beforeend', this.blackScreenIn);
    },
    fromBlack : function () {
        container.insertAdjacentHTML('beforeend', this.blackScreenOut);
    },
}

export default BlackScreenTransition;