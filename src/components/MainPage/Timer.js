import "./Timer.sass";
import scorePage from "../ScorePage/ScorePage";
import { cageGameOver } from "./Cage";

export let startTime = 60;

let timer;

const stopTimer = () => {
  clearInterval(timer);
};

const timerRender = () => {
  return `<div id="timer">${startTime}</div>`;
};

const checkTimer = () => {
  if (startTime === 0) {
    stopTimer();
    cageGameOver();
    setTimeout(() => {
      scorePage("defeat");
    }, 3000);
    startTime = 60;
  }
};

const resetTimer = () => {
  startTime = 60;
};

const render = () => {
  const battlegroundStats = document.getElementById("battleground-stats");
  battlegroundStats.insertAdjacentHTML("beforeend", timerRender());

  timer = setInterval(() => {
    startTime = startTime - 1;
    document.getElementById("timer").innerHTML = startTime;
    checkTimer();
  }, 1000);
};

export { render as renderTimer, stopTimer, startTime as userTime, resetTimer };
