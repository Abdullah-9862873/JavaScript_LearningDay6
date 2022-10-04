// append child
// insertBefore
// replaceChild
// removeChild

//_______________________________________________

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";

// ul.appendChild(li);

//_____________________________________________

// we have to make a reference node in order to use insertBefore and replaceChild

const reference = document.querySelector(".todo-lists-li");

// ul.insertBefore(li, reference);

// insertBefore("kisko karna hai", "kiss se pehle karna hai")

//_________________________________________________

ul.replaceChild(li, reference);

// replaceChild("kisko karna hai", "kiss se pehle karna hai")

//____________________________________________________

// ul.removeChild(li);