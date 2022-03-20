const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const Emoji = ["💛", "🌼", "🌕", "🍋", "🐠", "🐝", "🎫"];

const TODOS_KEY = "todos";
let toDos = [];

//--------------1. 할일을 적고 Enter를 눌렀을 때의 이벤트 --------------
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodoObj = {
        id: Date.now(),
        text: Emoji[Math.floor(Math.random()*Emoji.length)]+" "+todoInput.value+"  ",
    };
    todoInput.value = ""; //입력창을 비워줌
    paintToDo(newTodoObj); // 리스트에 새로 입력한 Todo를 print하는 함수
    saveTodo(); // local DB에 업데이트 된 리스트를 저장

}

//--------------2. 리스트에 새로 입력한 Todo를 print하는 함수 --------------
function paintToDo(newTodoObj){
    const li = document.createElement("li"); // li 태그 생성
    const span = document.createElement("span"); // li > span 태그 생성 -> first-child
    const btn = document.createElement("button"); // li > button 태그 생성 -> second-child
    li.id = newTodoObj.id; // remove 기능을 위한 고유값 부여
    btn.className = "remove";
    btn.innerText = "Del";
    btn.addEventListener("click", deleteTodo); // 삭제 버튼을 눌렀을 때 event
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodoObj.text;
    toDos.push(newTodoObj);
    todoList.appendChild(li);

}

//--------------3. 삭제 버튼을 눌렀을 때 event --------------

function deleteTodo(event){
    const li = event.target.parentElement; // 삭제할 li targeting
    toDos = toDos.filter((item) => item.id !== parseInt(li.id)); 
    // item.id의 자료형 = number, li.id의 자료형 = string. 따라서 !==는 자료형까지 비교하므로 자료형을 맞춰줄 필요가 있다.
    saveTodo(); // 업데이트된 toDos 배열 저장.
    li.remove();
}

//--------------4. toDos 배열이 업데이트 되었을 때, local에 저장하는 함수 --------------

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array -> string으로 변환하여 local에 저장
}

//--------------5. 페이지를 새로고침 할 때마다 list를 유지하기 위해 local 내용을 불러오는 부분 --------------
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedTodo = JSON.parse(savedToDos); // string -> array
    toDos = parsedTodo;
    parsedTodo.forEach(paintToDo); // parsedTodo 배열의 각 요소마다 list에 출력
}

todoForm.addEventListener("submit", handleToDoSubmit);