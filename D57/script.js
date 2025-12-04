// Javascript Functions
// In javascript function is a block of code

console.log("WelCome to Javascript Function World!")

// Creating Function

function myFun(name) {
    console.log("Hey " + name + " How are you?");
    console.log("Hey " + name + " whats happening in your life, i listen smoething weird?");
    console.log("Hey " + name + " send me your contact?");
}

// myFun("Akshat");
myFun("Arnav");

// Function for return sum of 2 digits

function sum(a, b){
    let res = a + b;
    console.log("Sum of A & B =>", res);
}
sum(34, 21);
// let res = sum(22, 43);
// console.log("Sum Of A & B =>", res);

function ans_sum(a, b, c = 10){
    return a + b + c;
}
res = ans_sum(22, 43, 100); //C have default value until you didn't passed any value at the time of funtion calling
console.log("Sum Of A, B & C=>", res);

// Aero Function

const set = (p) => {
    console.log("Halo Halo Ye Aero Function Hai:", p);
}
set(123);
