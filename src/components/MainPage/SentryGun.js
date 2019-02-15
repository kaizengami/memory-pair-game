import './SentryGun.sass';

let cursor = {
    x: null,
    y: null,
}

const sentryGunDom = () => {
    return '<div class="sentry-gun"></div>';
}

const sentryGunAutoAiming = () => {
    window.addEventListener('mousemove', sentryGunListenerFunctions);
}

const sentryGunListenerFunctions = (event) => {
    const sentryGun = document.querySelector('.sentry-gun');
    let arrowRects = sentryGun.getBoundingClientRect();
    let arrowX = arrowRects.left + arrowRects.width / 2;
    let arrowY = arrowRects.top + arrowRects.height / 2;
    sentryGun.style.transform = 'rotate(' + (Math.atan2(event.clientY - arrowY, event.clientX - arrowX) - 1.57) + 'rad)';
    getCursorPosition(event);
}

const fireBall = () => {
    return '<div class="fire-ball"></div>';
}

const renderfireBall = () => {
    const sentryGun = document.querySelector('.sentry-gun');
    setTimeout(() => {
        console.log('fire');
        sentryGun.insertAdjacentHTML('beforeend', `${fireBall()}`);
        /*setTimeout(() => {
            moveFireBall();
        }, 500);*/
    }, 500);
}

const getCursorPosition = (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
}
/*
const moveFireBall = () => {
    const fireBallDom = document.querySelector('.fire-ball');
    const FIRE_BALL_SIZE_X = 110;
    const FIRE_BALL_SIZE_Y = 110;
    fireBallDom.style.top = 0;
    window.removeEventListener('mousemove', sentryGunListenerFunctions);
    let animate = setInterval(() => {
        let fireBall = getFireBallPosition();
        let enemy = {
            x: fireBall.x,
            y: fireBall.y,
        }
        let fireBallDomTop = parseInt(fireBallDom.style.top);
        if (enemy.x < cursor.x +  FIRE_BALL_SIZE_X &&
            enemy.x + FIRE_BALL_SIZE_X > cursor.x &&
            enemy.y < cursor.y + FIRE_BALL_SIZE_Y &&
            enemy.y + FIRE_BALL_SIZE_Y > cursor.y) {
            console.log('damage!');
        }
        fireBallDom.style.top = `${fireBallDomTop + 5}px`;
        if (fireBallDomTop > 1000) clearInterval( animate );
    }, 40);
}
*/
const render = () => {
    const gameScene = document.getElementById('game-scene');
    gameScene.insertAdjacentHTML('afterend', `${sentryGunDom()}`);
    sentryGunAutoAiming();
    renderfireBall();
}

export { render as renderSentryGun };
