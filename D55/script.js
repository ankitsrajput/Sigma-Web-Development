// Conditional statements
let age = 16;
let grace = 3;

if ((age + grace) > 18) {
    console.log("You can drive.");
}
else {
    console.log("You cannot drive.");
}

// Operators
let a = 8;
let b = 2;

console.log("A =", a, ", B =", b);
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation: a raised to the power of b

// Assignment Operator
let c = 5;

// c = c + 6; // Equivalent to c += 6
// c += 3; // Equivalent to c = c + 3
// c -= 2; // Equivalent to c = c - 2
// c *= 4; // Equivalent to c = c * 4
// c /= 2; // Equivalent to c = c / 2
// c %= 3; // Equivalent to c = c % 3
c **= 2; // Equivalent to c = c ** 2

console.log("Final value of c =", c);

// Comparison Operators
let yr = 2026;
// == (equal to)
if (yr == 2025) {
    console.log("You will passout this year.");
}
else {
    console.log("You will passout next year or later.");
}

// != (not equal to)
let num = 78;
if (num != 7) {
    console.log("You have selected number greater or lesser than 7.");
}
else {
    console.log("You have selected number 7.");
}

let mrk = 33;
// > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)
if (mrk != 33) {
    console.log("You have passed the exam.");
}
else {
    console.log("You have just passed the exam.");
}

// Logical Operators
// AND operator
let temp = 25;
if (temp >= 20 && temp <= 30) {
    console.log("The weather is pleasant.");
}
else {
    console.log("The weather is not pleasant.");
}

// OR operator
let hum = 78;
if (hum <= 40 || hum >= 70) {
    console.log("The humidity is not pleasant.");
}
else {
    console.log("The humidity is pleasant.");
}

// NOT operator
let light = true;
if (!light) {
    console.log("It's dark.");
}
else {
    console.log("It's bright.");
}

// Ternary Operator
let time = 11;
let period = (time >= 12) ? "PM" : "AM";
console.log("It's", period);

{
    let a = 10;
    let b = 43;
    let res = (a > b) ? (a - b) : (b - a);
    console.log("The difference is", res);
}

// Else-if ladder
let marks = 85;
if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade: B+");
}
else if (marks >= 60 && marks < 70) {
    console.log("Grade: B");
}
else if (marks >= 50 && marks < 60) {
    console.log("Grade: C");
}
else if (marks >= 33 && marks < 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// Switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}