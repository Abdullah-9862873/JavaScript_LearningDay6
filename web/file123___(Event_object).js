// event object

const firstButtton = document.querySelector("#one");

// firstButtton.addEventListener("click", function(){
//     console.log(this.textContent);
// })

// value of "this" in case of arrow function is one step above that is "window"
//______________________________________________________________________________________________________________

const allButtons = document.querySelectorAll(".my_buttons button");

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(button.textContent);
//     })
// }

//__________________________________________________________________________________________________________________

// Browser has ----> Js engine + Features(WebApi's)

// When a particular event is performed then Browser do two things

// 1) Give the call back function to JS engine to perform the task
// 2) Give the information about the event in the form of objects called event objects

//__________________________________________________________________________________________________________________

// To get the event object

// for(let button of allButtons){
//     button.addEventListener("click", function(eventInfo){
//         console.log(eventInfo);
//     })
// }


//______________________________________________________________________________________________________________________

// Target ---> Kiss element ne event ko trigger kia
// CurrentTarget ---> Kiss element pe humne event lagaya tha

// In this case both are same

for(let button of allButtons){
    button.addEventListener("click", function(eventInfo){
        console.log(eventInfo.target);
    })
}

for(let button of allButtons){
    button.addEventListener("click", function(eventInfo){
        console.log(eventInfo.currentTarget);
    })
}