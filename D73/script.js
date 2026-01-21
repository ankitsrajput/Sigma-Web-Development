// Event Listening...
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    // alert("Button is Clicked..Yaahh🎉!!");
    document.querySelector(".box").innerText = "Yahh!! You Clicked the Button 🎉";
});

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "Yahh!! You Double Clicked the Button 🎉";
});

button.addEventListener("mouseover", () => {
    document.querySelector(".box").innerHTML = "OMG!! You Hovered Over The Button 🎉";
});

// Keyboard Button Events
document.addEventListener("keydown", (e) =>{
    console.log("You Pressed:", e.key);
    console.log("You Pressed:", e.code);
    console.log("You Pressed:", e.which);
    console.log("You Pressed:", e.keyCode);
})

// setTimeout & setInterval
setInterval(() => {
    console.log("Hello in Every 1 Seconds👋");
}, 1000);
// Run in Every 1 Seconds

setTimeout(() => {
    console.log("Hello After 2 Seconds👋");
}, 2000);
// Run in 2 Seconds Once