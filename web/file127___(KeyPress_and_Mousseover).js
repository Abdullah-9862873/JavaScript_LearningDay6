// keypress
//mouseover


//______________________________________________________________________________________

const body = document.body;

body.addEventListener("keypress", (e) => {
    console.log(e.key);
})

// Now whatever you'll click on Keyboard will be printed on the console

//______________________________________________________________________________________

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover is occured");
})

mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave is occcured");
})