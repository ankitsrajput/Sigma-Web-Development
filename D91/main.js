const express = require("express");
const app = express();
app.set("view engine", "ejs");

const PORT = 3000;

app.get("/", (req, res) =>{
    // res.send("Hello Express Server!!");
    let siteName = "GharKart";
    let searchTxt = "Search...";
    let searchBtn = "Search Now";
    let arr = [11, 13, 15, 17, 19, 23, 27, 31];
    res.render("index", {siteName: siteName, searchTxt: searchTxt, searchBtn: searchBtn, arr: arr});
});

app.get("/blog/:slug", (req, res) =>{
    // res.send("Hello Express Server!!");
    let blogTitle = "eJS Template Engine";
    let blogCont = "eJS Template Engine Content";
    res.render("templates/blog.ejs", {blogTitle: blogTitle, blogCont: blogCont});
});

app.listen(PORT, () =>{
    console.log(`Server is running on PORT : ${PORT}`);
});