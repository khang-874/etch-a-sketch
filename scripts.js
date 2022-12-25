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
resetButton.setAttribute("id", "resetButton");
resetButton. innerText = "Reset";

let blackColorButton = document.createElement("div");


let instruction = document.createElement("div");
instruction.innerText = "Hold Spacebar to draw";
instruction.id = "instruction";
navigatorBar.appendChild(instruction);
navigatorBar.appendChild(resetButton);
let play = false;
        
window.addEventListener('keydown', e => {
    if(e.key == " ")
        play = true;  
});

window.addEventListener('keyup', e =>{
    play = false;
});

function reset(e){
    let padList = padContainer.querySelectorAll("div");
    for(const pad of padList)
        pad.style.backgroundColor = "white";
}
resetButton.addEventListener("mousedown", reset);

function addColorClass(e){
    if(play){
        let currentDiv = e.target;
        currentDiv.style.backgroundColor = "black";
    }

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