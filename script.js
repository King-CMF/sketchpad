const container = document.querySelector(".container")

for (i=0; i<256; i++){
    const square = document.createElement("div");
    square.setAttribute("class", "grid")
    container.appendChild(square)
}

const grid = document.querySelectorAll(".grid");

grid.forEach(squares => {
    squares.addEventListener("mouseenter", () => {
        squares.setAttribute("class", "hov")
    })
});
