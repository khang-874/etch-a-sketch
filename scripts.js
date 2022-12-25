const container = document.querySelector("#container");

let padContainer = document.createElement("div");
let numberOfRows = 16;
let numberOfColumns = 16;
const defaultColor = "#322F2B";
let color = defaultColor;
{
padContainer.setAttribute("id", "padContainer");
}
let navigatorBar = document.createElement("div");
let draw = false;
let erase = false;
let eraserButton = document.createElement("div");
let resetButton = document.createElement("div");
let basicColorButton = document.createElement("div");
let randomColorButton = document.createElement("div");
let choosen = false;
let rangeSlider = document.createElement("input");
let size = document.createElement("div");
let createPadButton = document.createElement("div");
{
navigatorBar.setAttribute("id", "navigatorBar");
resetButton.className = "navigatorButton"
resetButton.innerText = "Reset";

eraserButton.className = "navigatorButton";
eraserButton.innerText = "Eraser";

basicColorButton.className = "navigatorButton";
basicColorButton.innerText = "Basic Color";

randomColorButton.className = "navigatorButton";
randomColorButton.innerText = "Random Color";

function chooseDiv(e){
    let choosenDiv = e.target;
    choosen = !choosen;

    if(choosenDiv.classList.contains("navigatorSelected"))
        choosenDiv.classList.remove("navigatorSelected");
    else{
        for(let div of navigatorBar.querySelectorAll('div'))
            div.classList.remove("navigatorSelected");
        choosenDiv.classList.add("navigatorSelected");
    }
}
eraserButton.addEventListener('mousedown', e => {
    chooseDiv(e);
    erase = !erase;
});

basicColorButton.addEventListener('mousedown', e => {
    chooseDiv(e);
    reset(e);
    color = defaultColor;
});

randomColorButton.addEventListener('mousedown', e => {
    chooseDiv(e);
    reset(e);
    color = '';
    console.log("Change color");
});

resetButton.addEventListener("mousedown", e => {
    erase = false;
    for(let div of navigatorBar.querySelectorAll('div'))
        div.classList.remove("navigatorSelected");
})

rangeSlider.id = "rangeSlider";
rangeSlider.setAttribute("type", "range");
rangeSlider.setAttribute("min", "1");
rangeSlider.setAttribute("max", "101");
rangeSlider.setAttribute("value", "16");
rangeSlider.setAttribute("step", "3");
rangeSlider.setAttribute("defaultValue", "16");
rangeSlider.addEventListener("input", e => {
    console.log(e.target.value);
    size.innerHTML = `${e.target.value} x ${e.target.value}`
})

size.id = "sizeBox";
size.innerHTML = `${rangeSlider.value} x ${rangeSlider.value}`;

createPadButton.innerText = "Create";
createPadButton.classList.add("navigatorButton");
createPadButton.addEventListener("mousedown", e => {
    reset(e);
    numberOfColumns = rangeSlider.value;
    numberOfRows = rangeSlider.value;
    createPad();
})
navigatorBar.appendChild(basicColorButton);
navigatorBar.appendChild(randomColorButton);
navigatorBar.appendChild(eraserButton);
navigatorBar.appendChild(resetButton);
navigatorBar.appendChild(size);
navigatorBar.appendChild(rangeSlider);
navigatorBar.appendChild(createPadButton);
}

        
window.addEventListener('mousedown', e => {
    draw = true; 
});

window.addEventListener('mouseup', e =>{
    draw = false;
})


function reset(e){
    let padList = padContainer.querySelectorAll("div");
    for(const pad of padList)
        pad.style.backgroundColor = "white";
}
resetButton.addEventListener("mousedown", reset);

let colorList = [
    "#FAEBD7",
    "#EBFAD7",
    "#D7FAE1",
    "#D7F5FA",
    "#D7D7FA",
    "#F5D7FA",
    "#FAD7E1"
];
function getRandomColor(){
    let random = Math.floor(Math.random() * colorList.length);
    return colorList[random];
}
function addColor(e){
    let currentDiv = e.target;
    if(draw || (!erase && e.type == "mousedown")){
        if(color != '')
            currentDiv.style.backgroundColor = color;
        else{
            currentDiv.style.backgroundColor = getRandomColor();
        }
    }
    if(erase && draw)
        currentDiv.style.backgroundColor = "white";
}

let playGround = document.createElement('div');
playGround.id = "playGround";

let playGroundTitle = document.createElement('h1');
playGroundTitle.innerText = "Etch-a-Sketch";
playGroundTitle.id = "playGroundTitle";

playGround.appendChild(playGroundTitle);
function createPad(){
    padContainer.style = `grid-template-rows: repeat(${numberOfRows},1fr)`;
    padContainer.style = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;
    padContainer.innerHTML = '';
    for(let i = 0; i < numberOfRows; ++i){
        for(let j = 0; j < numberOfColumns; ++j){
            let pad = document.createElement("div");
            pad.setAttribute("class", `pad`);
            pad.addEventListener("mouseover", addColor);
            pad.addEventListener("mousedown", addColor);
            padContainer.appendChild(pad);
        }
}
}
createPad();
playGround.appendChild(padContainer)
container.appendChild(navigatorBar);
container.appendChild(playGround);