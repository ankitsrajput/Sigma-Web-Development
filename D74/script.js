// Callback Functions...
console.log("Program Started..!!");

setTimeout(() => {
    console.log("SetTimeout Function Execute Now..!!"); //Callback Function
}, 1000); //Asynchronous Code

console.log("Program Ended..!!"); //Synchronous Code

// Callback Function

const myFun = () => {
    console.log("Inside myFun..!!");
}

const callback = (arg, myFun) => {
    console.log(arg);
    myFun();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Script is Loaded..!!", myFun);
    document.head.append(sc);
}

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback);
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);