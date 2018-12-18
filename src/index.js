import './index.sass';
import StartingPage from './components/StartingPage/StartingPage';
import RenderFullScreenVideo from './components/FullScreenVideo/FullScreenVideo';
import RenderIntroVideoMenu from './components/StartingPage/IntroVideoMenu';
import HotKeys from './components/HotKeys';
import Sundtrack from './components/Sound';

RenderFullScreenVideo('kottans-intro.mp4', '');
RenderIntroVideoMenu();
HotKeys.applyHotKeys();
Sundtrack.create('starting-page.mp3', true);

const full_screen_video = document.getElementById('full-screen-video');

full_screen_video.onended = function(e) {
    full_screen_video.remove();
    StartingPage();
}

