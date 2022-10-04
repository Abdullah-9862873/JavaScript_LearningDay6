// clone nodes



// If we want to append and prepend the same thing at the same time then we cannot do that using .append and .prepend... Yes, we can do that using insertAdjacentElements.... But to do this we can clone the element using cloneNode

//_______________________________________________

const todoList = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Text";



// Cannot do the following operations simultaneously

// todoList.append(li);
// todoList.prepend(li);

//________________________________________________

// Clone nodes

const li2 = li.cloneNode(true);
todoList.append(li);
todoList.prepend(li2);

// Here true is written to deeply clone the nodes
