import './index.sass';
import StartingPage from './components/StartingPage/StartingPage';
import RenderFullScreenVideo from './components/FullScreenVideo/FullScreenVideo';

RenderFullScreenVideo('kottans-intro.mp4', '');

const full_screen_video = document.getElementById('full-screen-video');

full_screen_video.onended = function(e) {
    full_screen_video.remove();
    StartingPage();
}


