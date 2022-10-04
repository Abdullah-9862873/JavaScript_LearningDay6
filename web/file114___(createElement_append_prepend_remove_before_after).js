// createElement
// append
// prepend
// remove

//_________________________________________________

// const newTodoItem = document.createElement("li");
// console.log(newTodoItem);

// newTodoItem.textContent = "New Text";
// console.log(newTodoItem);

// const todoList = document.querySelector(".todo-list");
// console.log(todoList);

//______________________________________________
// todoList.append(newTodoItem);

//___________________________________________________

// todoList.prepend(newTodoItem);

//_________________________________________________

// I wanna remove todo1

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

//_____________________________________________

// before

const todoList = document.querySelector(".todo-list");


const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Text";

// todoList.before(newTodoItem);

//________________________________________________

//after

todoList.after(newTodoItem);
