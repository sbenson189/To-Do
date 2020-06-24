const newTodo = document.createElement("li");
const form = document.querySelector("#add-todo");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#buildTodoList")
//NEW
// const addCheckbox = document.createElement('input');
// addCheckbox.type= "checkbox";
// addCheckbox.class= "complete";


buildTodoList.addEventListener("click" , function (event) {
    if (event.target.tagName === "BUTTON") { // REMEMBER BUTTON IS ALL CAPS
        event.target.parentElement.remove();
        } });

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = document.createElement("li");
    const removeBtn = document.createElement("button");
    const addCheckbox = document.createElement('input');
        addCheckbox.type= "checkbox";
        addCheckbox.class= "complete";
const newLabel = document.createElement('label');
// document.getElementById("newTodo").appendChild(newLabel);
    removeBtn.innerText = " Remove";
    newTodo.innerText = input.value;
    newTodo.appendChild(removeBtn);
    buildTodoList.appendChild(newTodo);
    input.value = "";
    newTodo.prepend(addCheckbox);
            newTodo.append(newLabel);

    form.addEventListener("click", function(event) {
        if (event.target.tagNAme === "BUTTON") {
            newTodo.classList.add("strikethrough");
            
            
        };
    })
    
});
