const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const Emoji = ["๐", "๐ผ", "๐", "๐", "๐ ", "๐", "๐ซ"];

const TODOS_KEY = "todos";
let toDos = [];

//--------------1. ํ ์ผ์ ์ ๊ณ  Enter๋ฅผ ๋๋ ์ ๋์ ์ด๋ฒคํธ --------------
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodoObj = {
        id: Date.now(),
        text: Emoji[Math.floor(Math.random()*Emoji.length)]+" "+todoInput.value+"  ",
    };
    todoInput.value = ""; //์๋ ฅ์ฐฝ์ ๋น์์ค
    paintToDo(newTodoObj); // ๋ฆฌ์คํธ์ ์๋ก ์๋ ฅํ Todo๋ฅผ printํ๋ ํจ์
    saveTodo(); // local DB์ ์๋ฐ์ดํธ ๋ ๋ฆฌ์คํธ๋ฅผ ์ ์ฅ

}

//--------------2. ๋ฆฌ์คํธ์ ์๋ก ์๋ ฅํ Todo๋ฅผ printํ๋ ํจ์ --------------
function paintToDo(newTodoObj){
    const li = document.createElement("li"); // li ํ๊ทธ ์์ฑ
    const span = document.createElement("span"); // li > span ํ๊ทธ ์์ฑ -> first-child
    const btn = document.createElement("button"); // li > button ํ๊ทธ ์์ฑ -> second-child
    li.id = newTodoObj.id; // remove ๊ธฐ๋ฅ์ ์ํ ๊ณ ์ ๊ฐ ๋ถ์ฌ
    btn.className = "remove";
    btn.innerText = "Del";
    btn.addEventListener("click", deleteTodo); // ์ญ์  ๋ฒํผ์ ๋๋ ์ ๋ event
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodoObj.text;
    toDos.push(newTodoObj);
    todoList.appendChild(li);

}

//--------------3. ์ญ์  ๋ฒํผ์ ๋๋ ์ ๋ event --------------

function deleteTodo(event){
    const li = event.target.parentElement; // ์ญ์ ํ  li targeting
    toDos = toDos.filter((item) => item.id !== parseInt(li.id)); 
    // item.id์ ์๋ฃํ = number, li.id์ ์๋ฃํ = string. ๋ฐ๋ผ์ !==๋ ์๋ฃํ๊น์ง ๋น๊ตํ๋ฏ๋ก ์๋ฃํ์ ๋ง์ถฐ์ค ํ์๊ฐ ์๋ค.
    saveTodo(); // ์๋ฐ์ดํธ๋ toDos ๋ฐฐ์ด ์ ์ฅ.
    li.remove();
}

//--------------4. toDos ๋ฐฐ์ด์ด ์๋ฐ์ดํธ ๋์์ ๋, local์ ์ ์ฅํ๋ ํจ์ --------------

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array -> string์ผ๋ก ๋ณํํ์ฌ local์ ์ ์ฅ
}

//--------------5. ํ์ด์ง๋ฅผ ์๋ก๊ณ ์นจ ํ  ๋๋ง๋ค list๋ฅผ ์ ์งํ๊ธฐ ์ํด local ๋ด์ฉ์ ๋ถ๋ฌ์ค๋ ๋ถ๋ถ --------------
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedTodo = JSON.parse(savedToDos); // string -> array
    toDos = parsedTodo;
    parsedTodo.forEach(paintToDo); // parsedTodo ๋ฐฐ์ด์ ๊ฐ ์์๋ง๋ค list์ ์ถ๋ ฅ
}

todoForm.addEventListener("submit", handleToDoSubmit);