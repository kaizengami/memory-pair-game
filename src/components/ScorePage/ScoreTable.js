import "./ScoreTable.sass";
import blackScreen from "../PageTransition/BlackScreenTransition";
import { changeFullScreenVideo } from "../FullScreenVideo/FullScreenVideo";
import sundtrack from "../Sound";
import startingPage from "../StartingPage/StartingPage";
import settings from "../Settings.js";

const resultArray = {};

const scoreTable = () => {
  return `<div id="score-table-wrapper">
            <div class="score">
                <div class="score-title">Name</div>
                <div class="score-title">Time</div>
                <div class="score-title">Points</div>
            </div>
            <div class="score">
                <div class="score-result">Test name</div>
                <div class="score-result">32 sec</div>
                <div class="score-result">900</div>
            </div>
         </div>
         <buttom id="play-again">Play again</button>`;
};

{
  /* <div class="scores">Web server for score table will be available in next updates...</div>
<buttom id="play-again">Play again</button> */
}

const addPlayAgainEvent = () => {
  const playAgain = document.getElementById("play-again");
  playAgain.addEventListener("click", () => {
    restartGame();
  });
};

const restartGame = () => {
  settings.gameScore.numberOfAttempts = 0;
  blackScreen.toBlack();
  const blackScreenDom = document.getElementById("black-screen-in");
  const soundtrack = document.getElementById("soundtrack");
  blackScreenDom.addEventListener("animationend", () => {
    cleanDom();
    soundtrack.pause();
    changeFullScreenVideo("kottans-end.mp4");
    const fullScreenVideo = document.getElementById("full-screen-video");
    fullScreenVideo.onended = function(e) {
      startingPage();
      sundtrack.change("starting-page.mp3");
    };
  });
};

const cleanDom = () => {
  document.getElementById("game-scene").remove();
  document.querySelector(".sentry-gun").remove();
  document.getElementById("cage").remove();
  document.getElementById("battleground-stats").remove();
  document.getElementById("battleground-board").remove();
  document.getElementById("blood").remove();
  document.getElementById("score-page").remove();
};

const render = () => {
  console.log(settings);

  const scorePage = document.getElementById("score-page");
  const scorePageCongratulation = document.querySelector(
    ".score-page-congratulation"
  );
  scorePage.insertAdjacentHTML("beforeend", scoreTable());
  const scoreTableDom = document.getElementById("score-table-wrapper");
  const playAgain = document.getElementById("play-again");

  scorePageCongratulation.addEventListener("animationend", () => {
    scoreTableDom.classList.add("score-table-visible");
    playAgain.classList.add("score-table-visible");
  });
  addPlayAgainEvent();
};

export default render;
