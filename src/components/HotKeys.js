import StartingPage from './StartingPage/StartingPage';

const HotKeys = {
    fullscreen : function () {
        document.body.addEventListener('keydown', {
            handleEvent: function (e) {
                if ((e.key=='f'||e.keyCode==70) && (e.target.nodeName=='BODY')) {
                    e.preventDefault();
                    if(!(document.webkitCurrentFullScreenElement==null)) document.webkitCancelFullScreen();
                    else document.documentElement.webkitRequestFullScreen();
                }
            }
          });
    },
    sound : function () {
        document.body.addEventListener('keydown', {
            handleEvent: function (e) {
                if ((e.key=='m'||e.keyCode==77) && (e.target.nodeName=='BODY')) {
                    e.preventDefault();
                    const full_screen_video = document.getElementById('full-screen-video');
                    if(full_screen_video.muted) full_screen_video.muted = false;
                    else full_screen_video.muted = true;
                }
            }
          });
    },
    introVideoSkipButton : function () {
        document.body.addEventListener('keydown', {
            handleEvent: function (e) {
                if ((e.key=='Escape'||e.key=='Esc'||e.keyCode==27) && (e.target.nodeName=='BODY')) {
                    e.preventDefault();
                    const full_screen_video = document.getElementById('full-screen-video');
                    const intro_video_menu = document.getElementById('intro-video-menu');
                    const intro_video_menu_skip = document.getElementById('intro-video-menu-skip');
                    //check if intro video ended
                    if(typeof(intro_video_menu) != 'undefined' && intro_video_menu != null) {
                        full_screen_video.remove();
                        intro_video_menu.remove();
                        intro_video_menu_skip.remove() 
                        StartingPage();
                        document.body.removeEventListener(e.type, this, false);
                    }
                    else document.body.removeEventListener(e.type, this, false);
                }
            }
          });
    },
    applyHotKeys : function () {
        this.introVideoSkipButton();
        this.sound();
        this.fullscreen();
    }
}

export default HotKeys;