// Short project

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todoValue = todoInput.value;
    // Print to ho lekin form empty ho jaye
    todoInput.value="";

    const newLi = document.createElement("li");
    const newInnerHtml = `<span class="text">${todoValue}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newInnerHtml;
    console.log(newLi);
    todoList.append(newLi);
})

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        // Want to access the span
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const liSpan = e.target.parentNode.parentNode;
        liSpan.remove();
    }
})