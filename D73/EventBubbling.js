// Event Bubbling...
// When an event is triggered on a child element, it "bubbles up" to its parent elements, triggering any event listeners on those parents as well. until it reaches the top of the DOM tree/Highest parent.

let chld = document.querySelector(".child");
let chilCont = document.querySelector(".child-container");
let parentCont = document.querySelector(".container");

chld.addEventListener("click", (e) => {
    alert("Child is Clicked Once🎉!!");
    e.stopPropagation();
});

chilCont.addEventListener("click", (e) => {
    alert("Child Container is Clicked🎉!!");
    e.stopPropagation();
});

parentCont.addEventListener("click", (e) => {
    alert("Parent Container is Clicked🎉!!");
    e.stopPropagation();
});