// this keyword

const btn = document.querySelector(".btn-headline");

//____________________________________________________________________________________________________________________

// In case of function declaration the value of "this" is the "btn" in this case 

// btn.addEventListener("click", function(){
//     console.log("You clicked me!!!");
//     console.log("The value of this is: ");
//     console.log(this);
// });


//____________________________________________________________________________________________________________________

// In case of arrow function the value of "this" will be "window" in this case

btn.addEventListener("click", () => {
    console.log("You clicked me!!!");
    console.log("Value of this is: ");
    console.log(this);
})
