const allButtons = document.querySelectorAll(".my_buttons button");

// You can use any for loop to iterate throug it and forEach too

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(button.textContent);
//     })
// }



for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        console.log(allButtons[i].textContent);
    })
}



// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(button.textContent);
//     })
// })