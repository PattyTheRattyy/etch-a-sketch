const container = document.querySelector("#container");
let squareDivs = document.querySelectorAll(".square");


// default container size of 16x16 squares
let input = 16
setGridSize(16);
let opacity = 0.1;

console.log(input);
const inputBtn = document.querySelector("#inputBtn");
inputBtn.addEventListener("click", () => {
    input = parseInt(prompt("Choose a number from 1-100", "16"));
    while (input > 100 || input < 1){
        input = parseInt(prompt("Choose a number from 1-100"));
    }
    setGridSize(input);
});

// removes squares from container
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

        div.style.opacity = "10%";

        // add square to container
        container.appendChild(div);
    }
    addColor();
}

function addColor() {
    squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach((item) => {
        // get random color when you hover over a square
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            item.style.opacity = parseFloat(item.style.opacity) + 0.1;
            let squareColor = `rgb(${r},${g},${b})`;
            item.style.backgroundColor = squareColor;
        });
    });
}