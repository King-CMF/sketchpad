const container = document.querySelector(".container");
let grid = document.querySelectorAll(".grid");
let boxes = 16;
let dim = 0;

function gen(){
    dim = (boxes*16)
    container.style.width = `${dim}px`;
    container.style.height = `${dim}px`;
    for (let i=0; i<(boxes**2); i++){
        const square = document.createElement("div");
        square.setAttribute("class", "grid")
        container.appendChild(square)
    col()
}}
gen();


function col(){
    grid = document.querySelectorAll(".grid");
    grid.forEach(squares => {
        squares.addEventListener("mouseenter", () => {
            squares.setAttribute("class", "hov")
        })
    })
};

const reset = document.querySelector(".rt");

reset.addEventListener("click", () =>
    grid.forEach(squares => {
        squares.setAttribute("class", "grid")
    })
);

const num = document.querySelector(".sq");

num.addEventListener("click", () => {
    grid.forEach(square => {
        square.remove()
    })
    boxes = Number(prompt("how big should the grid be?"))
    gen()
});