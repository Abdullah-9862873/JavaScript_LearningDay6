// inner html

const headline = document.querySelector(".headline");
// // console.log(headline);
// console.log(headline.innerHTML);

// This will give the inside html of that class

//_________________________________________

// We can change the inner html too


headline.innerHTML = "<h1> Hello World</h1>";
console.log(headline.innerHTML);

// Adding another property lets say button

headline.innerHTML += "<button class = \"btn\"> Learn More </button>";
console.log(headline.innerHTML);

//______________________________________________--