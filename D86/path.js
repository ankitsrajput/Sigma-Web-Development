import path from "path";

console.log(path);

let mypath = "D:\\SEM-II\\MERN Full-Stack\\D86\\ans.txt";
console.log("Your File Type is: ", path.extname(mypath));
console.log("File Directory Path is Here: ", path.dirname(mypath));
console.log("File's Base Name: ", path.basename(mypath));

console.log(path.join("d:/", "ansdpt\\ans.txt"));