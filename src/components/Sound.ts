import settings from "./Settings";

const sundtrack = {
  create: function (url, loop = false, muted = true): void {
    let audio = new Audio();
    audio.id = "soundtrack";
    audio.src = `static/media-files/sound/${url}`;
    audio.style.display = "none"; //added to fix ios issue
    audio.autoplay = true;
    audio.loop = loop;
    audio.muted = muted;
    document.getElementById("container").appendChild(audio);
    audio.onended = () => {
      audio.remove();
    };
    audio.pause();
  },
  play: function (): void {
    const audio = <HTMLVideoElement>document.getElementById("soundtrack");
    audio.load();
  },
  change: function (url: string): void {
    const audio = <HTMLVideoElement>document.getElementById("soundtrack");
    audio.src = `static/media-files/sound/${url}`;
  },
  effect: function (url: string): void {
    let audio = new Audio(`static/media-files/sound/${url}`);
    audio.muted = !settings.sound;
    audio.play();
  },
};

export default sundtrack;
