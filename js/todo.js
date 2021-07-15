const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function svaeToDos() {
    // JSON.stringify(인자)  ->  object 나 array 어떤 것이건 간에 string으로 바꿔준다. 
    // JSON.parse  ->  string을 array 형태로 바꿔준다
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
    // console.dir(event.target)
    const li = event.target.parentElement;  // 삭제하려는 todo(li)
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    svaeToDos();

}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button")
    // const close = document.createElement("span")
    // close.classList.add("material-icons");
    // close.innerText = "close";
    // button.appendChild(close);
    button.innerText = "del";

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    svaeToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)


// localstorage 에 있는 ToDo 리스트들을 가져온다
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(element => {paintToDo(element);});
}


