// Event bubbling / Event propagation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;


// grandparent.addEventListener("click", ()=>{
//     console.log("You click on grandparent");
// })

// parent.addEventListener("click", ()=>{
//     console.log("You click on parent");
// })

// child.addEventListener("click", ()=>{
//     console.log("You click on child");
// })

// body.addEventListener("click", ()=>{
//     console.log("You click on body");
// })

// The behaviour in which when you click on child then all the clicks get triggered and functions are performed from the inside to the outside (that is from child to body) ----> This is called Event Bubbling

// __________________________________________________________________________________

// grandparent.addEventListener("click", ()=>{
//     console.log("You click on grandparent");
// }, true)

// parent.addEventListener("click", ()=>{
//     console.log("You click on parent");
// }, true)

// child.addEventListener("click", ()=>{
//     console.log("You click on child");
// }, true)

// body.addEventListener("click", ()=>{
//     console.log("You click on body");
// }, true)



// The behaviour in which when you click on child then all the clicks get triggerred and functions are performed from outside to inside (that is from body to child) ---> This is called capturing

// Capturing is done from outside to inside... The cycle is from top to bottom in case of capturing and bottom to top in case of bubbling 

// There are three parameters of addEventListener ---->

// 1) Which Event
// 2) What to do?
// 3) Capture true or false ------> By default --> false

//_____________________________________________________________________________

// grandparent.addEventListener("click", ()=>{
//     console.log("Capturing grandparent");
// }, true)

// parent.addEventListener("click", ()=>{
//     console.log("Capturing parent");
// }, true)

// child.addEventListener("click", ()=>{
//     console.log("Capturing child");
// }, true)

// body.addEventListener("click", ()=>{
//     console.log("Capturing body");
// }, true)

// grandparent.addEventListener("click", ()=>{
//     console.log("Bubbling grandparent");
// })

// parent.addEventListener("click", ()=>{
//     console.log("Bubbling parent");
// })

// child.addEventListener("click", ()=>{
//     console.log("Bubbling child");
// })

// body.addEventListener("click", ()=>{
//     console.log("Bubbling body");
// })


//___________________________________________________________________________
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//___________________________________________________________________________

// Event Delegattion

grandparent.addEventListener("click", function(e){
    console.log(e.target);
})

// Now when you click on child then it will print the target (that is child) and similar case with parent and grandparent... This is called delegation