// getElementByClassName and querySelectorAll


// const navItem = document.getElementsByClassName("nav-item");
// console.log(navItem);


// _______________________________________

// This is an array like object... It has indexing property and length but it is not array and you can check that:

// console.log(Array.isArray(navItem));

// console.log(navItem[0]);

// The getElementByClassName will give HTMLCollection to us...

//_______________________________________


const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);

// The querySelectorAll will give NodeList to us...

console.log(navItem[0]);