const container = document.querySelector("#container");

let padContainer = document.createElement("div");
padContainer.setAttribute("id", "padContainer");
let numberOfRows = 16;
let numberOfColumns = 16;
padContainer.style = `grid-template-rows: repeat(${numberOfRows},1fr)`;
padContainer.style = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;

let navigatorBar = document.createElement("div");
navigatorBar.setAttribute("id", "navigatorBar");

let resetButton = document.createElement("div");
resetButton.className = "navigatorButton"
resetButton.innerText = "Reset";

let draw = false;
let erase = false;

let eraserButton = document.createElement("div");
eraserButton.className = "navigatorButton";
eraserButton.innerText = "Eraser";
eraserButton.addEventListener('mousedown', e => {
    erase = !erase;
    eraserButton.classList.toggle("navigatorSelected")
});

navigatorBar.appendChild(eraserButton);
navigatorBar.appendChild(resetButton);


        
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

let basicColor = "#322F2B";
function addColorClass(e){
    let currentDiv = e.target;
    if(draw)
        currentDiv.style.backgroundColor = basicColor;
    if(erase)
        currentDiv.style.backgroundColor = "white";
}
for(let i = 0; i < numberOfRows; ++i){
    for(let j = 0; j < numberOfColumns; ++j){
        let pad = document.createElement("div");
        pad.setAttribute("class", `pad`);
        pad.addEventListener("mouseover", addColorClass);
        pad.addEventListener
        padContainer.appendChild(pad);
    }
}

container.appendChild(navigatorBar);
container.appendChild(padContainer);