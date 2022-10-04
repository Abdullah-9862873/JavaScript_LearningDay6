// textContent and innerText

//_______________________________________

//Text content is used to display the text in the console... 

const mainHeading = document.getElementById("main-heading");

// mainHeading.textContent = "This is new text";


//____________________________________

// Now we have added <span>Hello</span> inside the html and this will show in the browser but if we change the display of span to none then it won't appear on the browser but it will appear on the console...

// innerText property allows us to hide that content in the console too...

console.log(mainHeading.textContent);
console.log(mainHeading.innerText);

//__________________________________________
