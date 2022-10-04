// querySelector


// Query selector is used to select any thing from the html page... For example, rather than using getElementById which is only used to select id's... We can use query selector to select classes, elements etc...

// The rules for selection are same as that in css... that is for classes we access using dot... For ids we access using # etc.

const header = document.querySelector(".header");
console.log(header);


// ______________________________________

// The problem here is that if I select let's say a class that is present in all li's then when it gets one result it will print the document of it and stops going further... So we only get the document of "Home" li in this case...

// To solve this problem we use querySelectorAll


const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);