let side = 16;
let color = [1, 1, 1];
const mainDiv = document.querySelector("#main-container");
const sizeInput = document.querySelector("#grid-side");
const clear = document.querySelector("#clear-btn");
const black = document.querySelector("#black-btn");
const random = document.querySelector("#ran-btn");
let randomOn = false;


createGrid(side);

function createGrid(side){
    mainDiv.textContent = '';
    mainDiv.style.gridTemplateColumns = (`repeat(${side}, auto)`);
    let size = side * side;
    for (let i = 1; i <= size; i++){
        const div = document.createElement('div');
        div.classList.add("content");
        mainDiv.appendChild(div);
    }
    refreshDivs();
}

function refreshDivs(){
    const divs = document.querySelectorAll(".content");
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            if (randomOn){
                color = getRandomColor();
                div.style = `background-color: rgb(${color})`;
            }
            else div.style = `background-color: rgb(${color})`;
        });
    });
}

function clearBoard(){
    const divs = document.querySelectorAll(".content");
    divs.forEach((div) => {div.style = "background-color: rgb(255, 255, 255);";});
}

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return [red, green, blue];
}
//Listeners
sizeInput.addEventListener("change", function() {
    side = sizeInput.value;
    createGrid(side);
});

clear.addEventListener("click", clearBoard);

random.addEventListener("click", function(){
    randomOn = true;
    refreshDivs();
    
});
black.addEventListener("click", function(){
    color = [1, 1, 1];
    randomOn = false;
    refreshDivs();
});
