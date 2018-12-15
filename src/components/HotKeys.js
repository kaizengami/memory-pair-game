import StartingPage from './StartingPage/StartingPage';

const HotKeys = {
    introVideoSkipButton : function () {
        document.body.addEventListener('keydown', {
            handleEvent: function (e) {
                if ((e.key=='Escape'||e.key=='Esc'||e.keyCode==27) && (e.target.nodeName=='BODY')) {
                    e.preventDefault();
                    const full_screen_video = document.getElementById('full-screen-video');
                    full_screen_video.remove();
                    StartingPage();
                    document.body.removeEventListener(e.type, this, false);
                }
            }
          }, false);
    }
}

export default HotKeys;