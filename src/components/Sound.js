const Sundtrack = (url, loop = false) => {
    let audio = new Audio();
    audio.id = 'soundtrack';
    audio.src = `static/media-files/sound/${url}`;
    audio.style.display = 'none'; //added to fix ios issue
    audio.autoplay = true;
    audio.loop = false;
    audio.muted = false;
    audio.onended = () => {
      audio.remove(); 
    };
    audio.play();
}

export default Sundtrack;