const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
let maxSize = 512;
container.style.height = `${maxSize}px`
container.style.width = `${maxSize}px`
container.style.margin = '0 auto';


let slider = document.getElementById("range");
let size = 64;

let color = document.getElementById("color");

console.log(color.value);

slider.oninput = function () {
    size = this.value;
 
    console.log('value is ',typeof(size));
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createSquare();
    changeColor();
}

color.onchange = function () {
    console.log(color.value);
    let colorValue = color.value;

    let squares = document.querySelectorAll(".square");
    squares.forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = `${colorValue}`;
        })
    }
    )
}



//create 16x16 grid of square divs
function createSquare() {
    let squareSize = maxSize / size;
    console.log(squareSize);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.flexFlow = 'column wrap'
            container.appendChild(square);
        }
    }
}



function changeColor() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "black";
        })
    }
    )

}

function clearSquare(){
    console.log("it is working too");
    const squares = document.querySelectorAll(".square");

    squares.forEach(function (square) {
        square.style.backgroundColor = "white";
    }
    )
}

const button = document.getElementById('btn');
button.addEventListener('click', function () {
    console.log("it is working");
    clearSquare();
})




createSquare();
changeColor();
