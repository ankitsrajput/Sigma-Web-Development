// Color Boxes Using DOM
// let bxs = document.getElementsByClassName("box");
let bxs = document.querySelector(".container").children;
// console.log(bxs);

function getRandomColor() {
    let colorVal1 = Math.ceil(Math.random() * 255);
    let colorVal2 = Math.ceil(Math.random() * 255);
    let colorVal3 = Math.ceil(Math.random() * 255);
    return `rgb(${colorVal1}, ${colorVal2}, ${colorVal3})`;
}

Array.from(bxs).forEach((e) => {
    // console.log(e);
    setInterval(() =>{
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
    }, 500);
})


// let boxs = document.getElementsByClassName("box");
let boxs = document.querySelector(".container-1").children;
// console.log(boxs);

function getRandCol() {
    let colVal1 = Math.ceil(Math.random() * 255);
    let colVal2 = Math.ceil(Math.random() * 255);
    let colVal3 = Math.ceil(Math.random() * 255);
    return `rgb(${colVal1}, ${colVal2}, ${colVal3})`;
}

Array.from(boxs).forEach((e) => {
    // console.log(e);
    setInterval(() => {
        e.style.backgroundColor = getRandCol();
        e.style.color = getRandCol();
    }, 500);
})