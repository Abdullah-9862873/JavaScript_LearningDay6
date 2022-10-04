// get and set attribute

const link = document.querySelector("a");
// console.log(link);
console.log(link.getAttribute("href"));


const input = document.querySelector("input");
console.log(input.getAttribute("type"));



//______________________________________

//set attribute is used to set the attribure

// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute("href"));

//________________________________________


//challenge: Here we are getting #home from getAttribute of "a" but we want just home and not #...


console.log(link.getAttribute("href").slice(1));
