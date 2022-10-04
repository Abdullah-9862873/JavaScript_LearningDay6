// Get dimensions of element

const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo);

const info = sectionTodo.getBoundingClientRect();
console.log(info);

// You can get the width and height or some other things by:

console.log(info.height);