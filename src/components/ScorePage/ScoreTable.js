import "./ScoreTable.sass";
import blackScreen from "../PageTransition/BlackScreenTransition";
import { changeFullScreenVideo } from "../FullScreenVideo/FullScreenVideo";
import sundtrack from "../Sound";
import startingPage from "../StartingPage/StartingPage";
import settings from "../Settings.js";
import { getScores, postUserScore } from "../ServerOperations/ServerOperations";

const resultArray = {};

const scoreTable = () => {
  return `<div id="score-table-wrapper">
         <buttom id="play-again">Play again</button>`;
};

const creatScoreHtml = score => {
  const { name, time, status, points } = score;

  return ` <div class="score-result">${name}</div>
             <div class="score-result">${time} sec</div>
             <div class="score-result">${status}</div>
             <div class="score-result">${points}</div>`;
};

const generateScores = scores => {
  const header = `<div class="score">
                        <div class="score-title">Name</div>
                        <div class="score-title">Time</div>
                        <div class="score-title">Difficulty</div>
                        <div class="score-title">Points</div>
                     </div>`;
  return (
    header +
    '<div class="score">' +
    scores.map(score => creatScoreHtml(score)).join("") +
    "</div>"
  );
};

const userInput = () => {
  return `<div id="submit-wrapper"> 
                <div id="input-wrapper">    
                    <input placeholder="Your name..." type="text" name="userName" id="user-input">
                    <div class="buttons-wrapper">
                        <button id="submit-name">Submit</button>
                        <button id="submit-cancel">Cancel</button>
                    </div>
                </div>
            </div>`;
};

const addSumbitEvent = () => {
  const submitName = document.getElementById("submit-name");
  const userName = document.getElementById("user-input");
  const scoreTableDom = document.getElementById("score-table-wrapper");

  userName.focus();
  submitName.addEventListener("click", async () => {
    if (userName.value === "") {
      return;
    } else {
      console.log(userName.value);
      let postReult = await postUserScore(getUserScore(userName.value));
      console.log(postReult);
      let socres = await getScores();
      console.log(socres);
      document.getElementById("submit-wrapper").remove();

      let scoresHtml = generateScores(socres);
      scoreTableDom.insertAdjacentHTML("beforeend", scoresHtml);
      showScoreTable();
    }
  });
};

const getUserScore = userName => {
  return {
    name: userName,
    time: 60 - parseInt(settings.gameScore.time),
    points:
      parseInt(settings.gameScore.time) * 1000 -
      settings.gameScore.numberOfAttempts * 100
  };
};

const showScoreTable = () => {
  const scoreTableDom = document.getElementById("score-table-wrapper");
  const playAgain = document.getElementById("play-again");
  scoreTableDom.classList.add("score-table-visible");
  playAgain.classList.add("score-table-visible");
};

const addCancelEvent = () => {
  const submitCancel = document.getElementById("submit-cancel");
  submitCancel.addEventListener("click", () => {
    console.log("sumbit cancel");
    document.getElementById("submit-wrapper").remove();
    showScoreTable();
  });
};

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

  scorePageCongratulation.addEventListener("animationend", async () => {
    if (settings.gameScore.victory) {
      scorePage.insertAdjacentHTML("beforeend", userInput());
      addSumbitEvent();
      addCancelEvent();
    } else {
      let socres = await getScores();
      console.log(socres);
      let scoresHtml = generateScores(socres);
      scoreTableDom.insertAdjacentHTML("beforeend", scoresHtml);

      scoreTableDom.classList.add("score-table-visible");
      playAgain.classList.add("score-table-visible");
    }
  });
  addPlayAgainEvent();
};

export default render;
