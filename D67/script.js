
let bhoopJogi = document.getElementsByClassName("box");
bhoopJogi[2].style.backgroundColor = "GreenYellow";

let box_5 = document.getElementById("box-5");
box_5.style.backgroundColor = "Orange";

let boxQuery = document.querySelector(".box"); // Returns the first element only that matches.
boxQuery.style.backgroundColor = "skyblue"; // First Box

let boxQueryAll = document.querySelectorAll(".box"); //Returns all the HTML documents that matches.
console.log(bhoopJogi); // Returns Html Collection
console.log(boxQueryAll); // Returns Node List

boxQueryAll.forEach(e => {
    //  console.log(e);
    e.style.backgroundColor = "Green"; // All Boxes
    e.style.color = "White"; // All Boxes
})

let allDiv = document.getElementsByTagName("div");
let allpara = document.getElementsByTagName("p");
console.log(allDiv);
console.log(allpara);
allDiv[5].matches("#box-5"); //True
allDiv[4].matches("#box-5"); //False
allDiv[5].closest("#box-5"); // Return the element itself or other ancestor element