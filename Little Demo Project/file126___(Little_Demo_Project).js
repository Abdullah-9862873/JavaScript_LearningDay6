// little demo project

const mainButton = document.querySelector(".mainButton");

const body = document.body;

const heading = document.querySelector("span");
// Random color generator

const randomColorGenerator = function(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    const randomColor = `rgb(${red} ${green} ${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    heading.textContent = randomColor;
    body.style.backgroundColor = randomColor;
})