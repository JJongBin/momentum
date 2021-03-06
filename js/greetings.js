const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();     // 기본동작이 수행되지 않도록 함, 원래 form을 submit하면 새로고침이 됨
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // localStorage
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.innerText = `Hello,  ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    showTodos()
    showLogout()
}
function showTodos() {
    const todos = document.querySelector("#todo-form");
    const todoBox = document.querySelector(".todo-box");
    todos.classList.remove("hidden");
    todoBox.classList.remove("hidden");
}
function showLogout() {
    const logout = document.querySelector("#logout");
    logout.classList.remove("hidden");
}




// localStoge의 데이터를 확인!
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(savedUsername);
}




