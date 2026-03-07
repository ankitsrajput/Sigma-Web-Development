const express = require("express");
const blog = require("./routes/blog");
const fs = require("fs");
const app = express();

const PORT = 3000;
app.use(express.static("public"));
app.use('/blog', blog);

// Middleware Method-1 : Logger for our application.
app.use((req, res, next) =>{
    fs.appendFileSync("logs.txt", `Recieved a ${req.method} Request for ${req.url} at ${Date(Date.now())}\n`, (err) =>{
        console.log(err);
    });
    console.log(req.headers);
    req.ans = "Hii I'm Ankit Singh.";
    console.log(`Recieved a ${req.method} Request at ${Date.now()}`);
    // res.send("Hello From Middleware-1");
    next();
});

// Middleware Method-2
app.use((req, res, next) =>{
    console.log(`${req.method} method-2 recieved`);
    next();
});

app.get("/", (req, res) =>{
    res.send("Hello Get Request!" + req.ans);
})

app.get("/api", (req, res) =>{
    res.json(
        {
            "name" : "Ankit Singh",
            "StdId" : "MCA2024041",
            "email" : "ankitsrajputans@gmail.com",
            "age" : 25,
            "location" : "Bareilly",
            "contact" : "9369726021"
        }
    )
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})