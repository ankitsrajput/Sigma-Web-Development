// Javascript Arrays...
console.log("Javascript Arrays...!!")

let arr = [3, 2, 7, 7, 8, 6, 4, 6, 7, 8, 2];
console.log(arr);
console.log(typeof(arr));
console.log("isArray =>", Array.isArray(arr));
// Arrays are mutable
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// Array length
console.log("Length Of Array =>", arr.length);

// Array Update/Rewrite
arr[0] = 37;
arr[1] = 84;
arr[2] = 42;
arr[3] = 74;
console.log("New Array =>", arr);

// Covert array into string/CommaSeparatedString...
let strArr = arr.toString();
console.log(strArr);
console.log(typeof(strArr));

// Array join...
console.log(arr.join(" and "));

// Array pop() Basically returns last element of array
let pp = arr.pop();
console.log("Popped Element =>",pp);
console.log(arr.pop());

// Array Push
let pus = arr.push(100);
let pus_ = arr.push("Akshat");
console.log(arr);

// Array Shift...
let sft = arr.shift(); //Extract zeroth index's element

// Array Unshift...
let unsft = arr.unshift("Nirbhay");
console.log(arr);

// Delete Element From Array...
delete(arr[10]); //Delete given index element
console.log(arr);
console.log(arr.length); //Still 11
console.log(arr[10]); //Memory allocated but data not found.

// Array Concatination..
let a_1 = [1,2,3,4];
let a_2 = [5,6,7,8];
let a_3 = [9,10];
let cat = a_1.concat(a_2, a_3);
console.log(cat);

// Array sort...
let srt = [0,2,7,9,3,4,1,5,8,6]
let sted = srt.sort();
console.log(sted);

// Array Splice()...
let splc = srt.splice(2, 5, 66, 78, 22); //Slice elements from Starting index of 2 & till 5, after given element add instead of removal elements or add new elements
console.log("Spliced Array =>", splc);
console.log("Remaining Array =>", srt);

// Array Slice()...
let slis = srt.slice(1, 4);
console.log(slis);
console.log(srt);

// Array Reverse()...
let reArr = [0,4,5,6,7,8,9];
console.log("Original Array =>", reArr);
let rev = reArr.reverse();
console.log("Reversed Array =>", rev);

// Strings are not mutable...
let nam = "Akshat";
nam[0] = "Da";
console.log(nam);
// We can print string using index but not update or rewrite..
console.log(nam[0]);
console.log(nam[1]);