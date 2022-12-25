const container = document.querySelector("#container");

let padContainer = document.createElement("div");
let numberOfRows = 16;
let numberOfColumns = 16;
const defaultColor = "#322F2B";
let color = defaultColor;
{
padContainer.setAttribute("id", "padContainer");
padContainer.style = `grid-template-rows: repeat(${numberOfRows},1fr)`;
padContainer.style = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;
}
let navigatorBar = document.createElement("div");
let draw = false;
let erase = false;
let eraserButton = document.createElement("div");
let resetButton = document.createElement("div");
let basicColorButton = document.createElement("div");
let randomColorButton = document.createElement("div");
let choosen = false;
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

navigatorBar.appendChild(basicColorButton);
navigatorBar.appendChild(randomColorButton);
navigatorBar.appendChild(eraserButton);
navigatorBar.appendChild(resetButton);
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
    if(draw){
        if(color != '')
            currentDiv.style.backgroundColor = color;
        else{
            currentDiv.style.backgroundColor = getRandomColor();
        }
    }
    if(erase)
        currentDiv.style.backgroundColor = "white";
}
for(let i = 0; i < numberOfRows; ++i){
    for(let j = 0; j < numberOfColumns; ++j){
        let pad = document.createElement("div");
        pad.setAttribute("class", `pad`);
        pad.addEventListener("mouseover", addColor);
        pad.addEventListener
        padContainer.appendChild(pad);
    }
}

container.appendChild(navigatorBar);
container.appendChild(padContainer);