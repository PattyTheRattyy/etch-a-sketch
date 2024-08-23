const container = document.querySelector("#container");
let squareDivs = document.querySelectorAll(".square");


let input = 16
setGridSize(16);

console.log(input);
const inputBtn = document.querySelector("#inputBtn");
inputBtn.addEventListener("click", () => {
    input = parseInt(prompt("Choose a number from 1-100", "16"));
    setGridSize(input);
});


function resetGrid() {
    container.replaceChildren();
}


function setGridSize(gridSize) {

    resetGrid();

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("square");

        // This makes sure the squares are the right size to fit the container
        let squareSize = 500/gridSize;
        div.style.width = squareSize+"px";
        div.style.height = squareSize+"px";

        container.appendChild(div);
        
    }

    addColor();
}

function addColor() {
    squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach((item) => {
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let squareColor = `rgb(${r},${g},${b})`;
            item.style.backgroundColor = squareColor;
        });
    });
}