import "./ServerOperations.sass";

const API_LINK = `https://memory-pair-game-back.herokuapp.com`;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const loginFetch = async () => {
  const LOGIN_LINK = `${API_LINK}/auth/signin`;

  const BODY = {
    username: "SuperApp",
    password: "megaPassword256"
  };

  try {
    const response = await fetch(LOGIN_LINK, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(BODY)
    });
    if (!response.ok) {
      console.log(response);
      responseData.status = response.status;
      responseData.data = response.data;
      throw new Error(response);
    }

    let data = await response;

    responseData.status = data.status;
    responseData.data = data.headers.get("Authorization");

    return responseData;
  } catch (err) {
    return responseData;
  }
};

const loginDom = text => {
  `<div id="server-operations-login">${text}</div>`;
};

const renderLogin = async () => {
  const container = document.getElementById("container");

  container.insertAdjacentHTML("beforeend", loginDom("Connecting to server"));
  let result = await loginFetch();
  console.log(result);
  document.getElementById("server-operations-login").remove();
};

export { renderLogin };
