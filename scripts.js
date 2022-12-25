const container = document.querySelector("#container");

let padContainer = document.createElement("div");
padContainer.setAttribute("id", "padContainer");
let numberOfRows = 16;
let numberOfColumns = 16;
padContainer.style = `grid-template-rows: repeat(${numberOfRows},1fr)`;
padContainer.style = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;


for(let i = 0; i < numberOfRows; ++i){
    for(let j = 0; j < numberOfColumns; ++j){
        let pad = document.createElement("div");
        pad.setAttribute("class", `pad`);
        padContainer.appendChild(pad);
    }
}

container.appendChild(padContainer);