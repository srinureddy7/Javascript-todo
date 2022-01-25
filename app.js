//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  if (todoInput.value.trim()) {
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // const newTodo = document.createElement("li");
    // var textnode = document.createTextNode(todoInput.value);
    // newTodo.appendChild(textnode);
    // newTodo.innerText = todoInput.value;
    // var list = document.getElementById("todo-list");
    // list.insertBefore(newTodo,list.childNodes[0]);
    // console.log(textnode);

    // var list = document.getElementById("todo-list");
    // list.insertBefore(newTodo,list.childNodes[0]);
    //Check Mark Button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //trashButton
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to List
    // todoList.appendChild(todoDiv);
    todoList.insertBefore(todoDiv, todoList.childNodes[0]);
    //clear Input value
    todoInput.value = "";
  }
}
function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      console.log("ended");
      todo.remove();
    });
  }
  // CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
