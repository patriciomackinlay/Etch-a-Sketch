const container = document.querySelector(".container");

createGrid(16);

const resetButton = document.querySelector(".reset-button");

const gridSquares = document.querySelectorAll("div");

resetButton.addEventListener("click", () => {
    gridSquares.forEach((square) => {
        square.classList.remove("drawn");
    })
    const inputSize = Number(prompt("Enter grid size:", "16"));
    if (inputSize > 100) {
        createGrid(100);
    } else if (inputSize < 0) {
        createGrid(16);
    } else {
        createGrid(inputSize);
    }
});

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", (event) => {
            cell.classList.add("drawn");
        });
        container.appendChild(cell);
        
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, auto)`
}