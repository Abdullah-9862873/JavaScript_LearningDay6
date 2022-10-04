const rootNode = document.getRootNode();
console.log(rootNode);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

// const headElementNode = htmlElementNode.childNodes;
// console.log(headElementNode);

const  headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

//_______________________________________________

// sibling relationship

console.log(headElementNode.nextSibling);
console.log(headElementNode.childNodes[0]);
console.log(headElementNode.childNodes[0].nextSibling);
console.log(headElementNode.childNodes[0].nextSibling.nextSibling);
console.log(headElementNode.childNodes[0].nextSibling.nextSibling.nextSibling);

//___________________________________________________

// nextElementSibling

// nextElementSibling is used when we don't want text to show when we call next sibling... So now if we call next sibling it will ignore the texts and only print the element sibling if present next to it...

// console.log(headElementNode.childNodes[0].nextSibling.nextElementSibling);

// Now we get the script directly and not the text in between title and script

//____________________________________________

// If we want to access the childs but we don't want the textSpaces to be mentioned as child then we can use children method


const div = document.querySelector(".container");
console.log(div);
console.log(div.children);

//__________________________________________________

// You can directly select the body using

// const body = document.body;
// body.style.backgroundColor = "black";
// body.style.color = "fff"