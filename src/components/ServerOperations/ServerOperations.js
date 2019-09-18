import "./ServerOperations.sass";
import settings from "../Settings.js";

const API_LINK = `https://memory-pair-game-back.herokuapp.com`;

const loginFetch = async () => {
  const LOGIN_LINK = `${API_LINK}/auth/signin`;

  const BODY = {
    username: "SuperApp",
    password: "megaPassword256"
  };

  let responseData = {
    status: null,
    token: null
  };

  try {
    const response = await fetch(LOGIN_LINK, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(BODY),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      console.log(response);
      responseData.status = response.status;
      responseData.data = response.data;
      throw new Error(response);
    }
    let data = await response;

    return data.json();
  } catch (err) {
    console.log(err);

    return responseData;
  }
};

const postScoreFetch = async userResult => {
  const POST_SCORE_LINK = `${API_LINK}/tasks`;

  let responseData = {
    status: null,
    token: null
  };

  try {
    const response = await fetch(POST_SCORE_LINK, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userResult),
      headers: {
        Authorization: `Bearer ${settings.token}`,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      console.log(response);
      responseData.status = response.status;
      responseData.data = response.data;
      throw new Error(response);
    }
    let data = await response;

    return data.json();
  } catch (err) {
    console.log(err);

    return responseData;
  }
};

const scoresFetch = async () => {
  const SCORES_LINK = `${API_LINK}/tasks`;

  let responseData = {
    status: null,
    token: null
  };

  try {
    const response = await fetch(SCORES_LINK, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${settings.token}`
      }
    });
    if (!response.ok) {
      console.log(response);
      responseData.status = response.status;
      responseData.data = response.data;
      throw new Error(response);
    }
    let data = await response;

    return data.json();
  } catch (err) {
    console.log(err);

    return responseData;
  }
};

const loginDom = text => {
  return `<div id="server-operations-login">${text}</div>`;
};

const renderLogin = async () => {
  const container = document.getElementById("container");

  container.insertAdjacentHTML("afterend", loginDom("Connecting to server..."));

  let result = await loginFetch();
  settings.token = result.accessToken;

  setTimeout(() => {
    document.getElementById("server-operations-login").remove();
  }, 1000);
};

export {
  renderLogin,
  scoresFetch as getScores,
  postScoreFetch as postUserScore
};
