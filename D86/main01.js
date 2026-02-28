import fs from "fs/promises"

let fr = await fs.readFile("index.html");
let ap = await fs.appendFile("index.html", "\n<div class='ans-div'>Hello this is main div</div>");
console.log(ap);
console.log(fr.toString());