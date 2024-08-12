
const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);

    Math.random();
}

const squareDivs = document.querySelectorAll(".square");
squareDivs.forEach((item) => {
    item.addEventListener("mouseover", () => {
        console.log("test");
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let squareColor = `rgb(${r},${g},${b})`;
        item.style.backgroundColor = squareColor;
    });
});