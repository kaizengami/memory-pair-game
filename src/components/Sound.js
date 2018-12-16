let snd1  = new Audio();
let src1  = document.createElement("source");
src1.type = "audio/mpeg";
src1.src  = "static/media-files/sound/starting-page.mp3";
snd1.appendChild(src1);

const Play = () => {
    snd1.play();
}

export default Play