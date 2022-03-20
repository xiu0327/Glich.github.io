const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form > input");
const welcome = document.querySelector(".welcome");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){ // 이름이 저장되어 있지 않을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 저장된 이름이 있을 때
    paintWelcome(saveUsername);
}

//--------------1. 이름이 저장되어 있지 않을 때, 사용자 입력 함수 --------------

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintWelcome(username);
}

//--------------2. 이름과 함께 환영 문구 출력 --------------

function paintWelcome(username) {
    welcome.innerText = `Hello, ${username} !`;
}