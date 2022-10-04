// static list vs live list

// static list---> The lists in which when we change something by using JavaScript lets say we add another li then it will show up in the browser but it will not be displayed in the console... We have Node List in this case

// Live list---> The lists in which when we change something by using JavaScript lets say we add another li then it will show up in the browser and it will also be displayed in the console... We have HTMLCollection in this case

//_____________________________________________________________________________________________________________

// Selecting using query selector will give us NodeList----> Static

// const li = document.querySelectorAll(".todo-list li");
// // console.log(li);

// const sixthListItem = document.createElement("li");
// sixthListItem.textContent = "Item 6";

// const ul = document.querySelector(".todo-list");
// ul.append(sixthListItem);

// console.log(li);

//____________________________________________________________________________________________________________________

// Selecting using getElementBy.. will give us HTMLCollection---> Live

const ul = document.querySelector(".todo-list");

const li = ul.getElementsByTagName("li");
// console.log(li);

const sixthListItem = document.createElement("li");
sixthListItem.textContent = "Item 6";

ul.append(sixthListItem);
console.log(li);