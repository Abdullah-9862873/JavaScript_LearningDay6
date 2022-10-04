// insertAdjacentHTML
//beforebegin
//afterbegin
//beforeend
//afterend

//______________________________________________

// The same work we can do with this which we were doing with createElement and append,prepend

const todoList = document.querySelector(".todo-list");

todoList.insertAdjacentHTML("beforeend", "<li>New Todo </li>");

todoList.insertAdjacentHTML("beforebegin", "<li>New Todo </li>");

todoList.insertAdjacentHTML("afterbegin", "<li>New Todo </li>");

todoList.insertAdjacentHTML("afterend", "<li>New Todo </li>");