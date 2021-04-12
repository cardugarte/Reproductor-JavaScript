import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const playPause = document.querySelector("#play-pause");
const silence = document.querySelector("#mute-unmute");

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause()
] });
playPause.onclick = () => player.play();
silence.onclick = () => player.mute();
