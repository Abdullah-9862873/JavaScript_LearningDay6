// classList, add, remove, toggle classes

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);

// ________________________________________________

// Get the classes of section-todo

const sectionTodoClasses = sectionTodo.classList;
console.log(sectionTodoClasses);

//______________________________________________

// I want to add bg-dark class to section-todo

// sectionTodo.classList.add("bg-dark");

//_______________________________________________

// I want to remove container class from section-todo

// sectionTodo.classList.roveem("container");
// console.log(sectionTodo.classList);

//_________________________________________________

// I wanna check if there is a class named "container" present inside section Todo

const ans = sectionTodo.classList.contains("container");
console.log(ans);

//________________________________________________

// toggle is used to remove the class if it is present or add the class if it is not present

sectionTodo.classList.toggle("bg-dark");
// Now the class is added

sectionTodo.classList.toggle("bg-dark");
// Now the class is removed

//_______________________________________________
