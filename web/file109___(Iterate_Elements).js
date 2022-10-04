// iterate elements

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);

// This will give us HTML collection

// HTML collection is array like object so it has indexing

//________________________________________

// Iterating using for loop

// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
    // navItem.style.backgroundColor = "white";
    // navItem.style.color = "green";
    // navItem.style.fontWeight = "bold";
// }

//________________________________________

//Iterating using for of loop

// for(let navItem of navItems){
    // navItem.style.backgroundColor = "white";
    // navItem.style.color = "green";
    // navItem.style.fontWeight = "bold";
// }

//________________________________________

//Iterating using forEach

// We cannot iterate this using forEach

// navItems.forEach((navItem) => {
    // navItem.style.backgroundColor = "white";
    // navItem.style.color = "green";
    // navItem.style.fontWeight = "bold";
// })

// This will throw the error because it is an object and not an array... So we can use forEach method if we convet it into array

//_____________________________________

//Converting to array

let navItems = document.getElementsByTagName("a");
console.log(navItems);

navItems = Array.from(navItems);

console.log(Array.isArray(navItems));

// using forEach

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "white";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Using querySelectorAll will give us NodeList and we can use all three loop methods to iterate through it

// const navItems = document.querySelectorAll("a");


// simple for loop
// for of loop
// forEach

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&