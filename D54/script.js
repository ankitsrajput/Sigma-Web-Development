// Javasript Variables

console.log("Script loaded successfully..!!");
var a = 10;
a = 15; // Reassigning value to a
a = 19; // Reassigning value to a again
var b = 20;
var c = a + b;
var nam = "John Doe";

console.log("Sum of a and b is: " + c); // Ans is 30
console.log("Sum of a and b is: " + (a + b)); // Ans is 30
console.log("Sum of a and b is: " + a + b); // Ans is 1020
console.log(typeof a, typeof b, typeof c, typeof nam); // Outputs: number number number string

const d = 30; // Constant variable
//d = 40; // This will cause an error because d is a constant
console.log("Value of d is: " + d); // This line will not execute due to the error above

let e = 40; // Block-scoped variable
e = 50; // Reassigning value to e
{
    let e = 60; // This e is block-scoped and does not affect the outer e
    console.log("Inner block value of e is: " + e); // Outputs: Inner block value of e is: 60
}
console.log("Value of e is: " + e); // Outputs: Value of e is: 50

let nm = "Ankit Singh";
let age = 25;
let cgpa = 7.4;
const isStudent = true;
let sec = undefined; // Undefined variable
let lect = null; // Null variable
console.log("Name: " + nm + ", Age: " + age + ", CGPA: " + cgpa + ", Is Student: " + isStudent + ", Section: " + sec + ", Lecture: " + lect); // Outputs all variables
console.log("Name: " + nm + typeof(nm) + ", Age: " + age + typeof(age) + ", CGPA: " + cgpa + typeof(cgpa) + ", Is Student: " + isStudent + typeof(isStudent) + ", Section: " + sec + typeof(sec) + ", Lecture: " + lect + typeof(lect)); // Outputs types of all variables

let emp = {
    name: "Ankit Singh",
    age: 25,
    sal: 70000,
    isActive: true,
}
console.log("Employee Object: ", emp); // Outputs the employee object
emp.empId = "OS202519"; // Adding a new property to the object
console.log("Updated Employee Object: ", emp); // Outputs the updated employee object