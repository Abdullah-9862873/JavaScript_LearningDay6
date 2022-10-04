// Events behind the scenes

// console.log("Event Start!!!");
// const allButtons = document.querySelectorAll(".my_buttons button");

// allButtons.forEach((button) => {
//     button.addEventListener("click", function(e){
//         console.log(e.currentTarget.textContent);
//     })
// })

// console.log("Event End!!!");

//________________________________________________________________________________________________________________

// Now I want to delay the process of events output so I can do that by adding heavy calculations that the JS Engine takes time to execute

console.log("Event Start!!!");
const allButtons = document.querySelectorAll(".my_buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", function(e){
        let num=0;
        for(let i=0; i<=1e9; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})


let outerVar = 0;
for(let i=0; i<1e9; i++){
    outerVar += i;
}
console.log("Event End!!!", outerVar);

//___________________________________________________

// Here the even loop puts the buttons inside the queues and let the stack of JS engine to do its work... So JS engine executes its work and when the stack become empty then eventloop puts the buttons to the stack one by one and JS engine performs the calculations and show results...