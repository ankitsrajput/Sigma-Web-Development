const fs = require("fs");
// const fs = require("fs/promises");
console.log(fs);

console.log("File Writting Start")
fs.writeFileSync("ans.txt", "Ankit is a Aspiring MERN Stack Developer, And his tech knowledge is superbb..");
setTimeout(() => {
    // fs.writeFileSync("index.html", "<h1>Ankit is a Aspiring MERN Stack Developer, And his tech knowledge is superbb..</h1>");
    fs.writeFile("index01.html", "<h1>Ankit is a Aspiring MERN Stack Developer, And his tech knowledge is superbb..</h1>", () => {
        console.log("File is Created✅");
        fs.readFile("index01.html", (err, data) => {
            console.log("File's Data Successfully Fetched✅");
            console.log(err, data.toString());
        });
    });
}, 2000);

fs.appendFile("index.html", "<p>This is an appended Paragraph.</p>", (err, data) => {
    console.log(data);
    fs.readFile("index.html", (er, fc) => {
        console.log(er, fc.toString());
    });
});
console.log("File Writting End");