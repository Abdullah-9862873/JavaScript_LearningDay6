// Events

const btn = document.querySelector(".btn-headline");
// console.dir(btn);

// Three methods to add events to something
// 1) Add it into the inline of element
// 2) btn.onclick = function(){
//     console.log("You clicked Me !!!");
// }

// 3) and we will use the third one which is following

btn.addEventListener("click", () => {
    console.log("You clicked me!!!");
});