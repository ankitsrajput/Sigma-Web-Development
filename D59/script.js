// javascript Strings...
// In Javascript Strings are immutable.
// Means we can't change any string we can create new string using functions.

console.log("Hello Strings👋");

let mi = "Oxygen";
console.log(mi);
console.log(mi[0]);
console.log(mi[1]);
console.log(mi[2]);
console.log(mi[3]);
console.log(mi[4]);
console.log(mi[5]);
console.log(mi[6]); // Index has no letter

// Get length of String/Array
let len = mi.length;
console.log("Length Of a String/Array =>",len);

// String Template

let _name = "Ankit Singh";
let frnd = "No";
console.log("My self " + _name + " & I have " + frnd + " Friends..🎉");
// Template
console.log(`My Name is ${_name} & i have ${frnd} Friends..🎉`);

let nm = "Ankit's";
console.log(nm); // Success..✅

// Escape Sequence letter

let r = "Nirbhay\"s Phone"; // Sequence Letter (\")
console.log(r);

// toUpper Function

let adm = "Nirbhay";
adm = adm.toUpperCase();
console.log(adm);

// toLowerCase
adm = adm.toLowerCase();
console.log(adm);

// Slice between 0 to 3 but 3rd index not included.
adm = adm.slice(0, 3);
console.log(adm);

let slc = "Nirbhay";
slc = slc.slice(3); // Print all string after 3rd index means "bhay"
console.log(slc);

// Replace String

let rep = "Ankit Singh";
rep = rep.replace("Ankit Singh", "Akshat Rajput"); // If we have two times same string then only 1st replace
console.log(rep);

// Concatenate String
// Example-1 :-
let fName = "Rohit";
let lName = "Singh";
console.log(fName + lName + "Rajput");

// Example-2:-
let final = rep.concat(lName);
console.log(final, "Lodhi");

// Trim String

let raw = "           Akhil Chandra"
console.log("Original String =>",raw);
raw = raw.trim();
console.log("Trimmed String =>",raw);

// Some other functions

console.log(raw.charAt(0));
console.log(raw.indexOf("Chandra"));
console.log(raw.indexOf("Shekhar")); // If String isn't available, it always returns ZERO(0)
console.log(raw.startsWith("Ch"));
console.log(raw.endsWith("ra"));