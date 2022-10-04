// little practice with click events


//____________________________________________________
// Change the bg color of button when it is pressed

const allButtons = document.querySelectorAll(".my_buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", function(e){
        e.currentTarget.style.backgroundColor = "yellow";
        e.currentTarget.style.color = "grey";
    })
})