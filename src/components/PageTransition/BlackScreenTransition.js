import './BlackScreenTransition.sass';

const BlackScreenTransition = {
    blackScreen : '<div class="black-screen"></div>',
    show : function () {
        const container = document.getElementById('container');
        container.insertAdjacentHTML('beforeend', this.blackScreen);
    },
}

export default BlackScreenTransition;