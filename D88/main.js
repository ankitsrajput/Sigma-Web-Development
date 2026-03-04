// Handling GET, POST Requests using Express...
const express = require('express');
const blog = require('./routes/route');
const shop = require('./routes/shop');
const app = express();

app.use(express.static("public"));
app.use("/blogs", blog);
app.use("/shop", shop);

const port = 3000;

app.get('/', (req, res) => {
    console.log("Hey its a GET Request");
    res.send('Hello Get World!');
});

app.post('/', (req, res) => {
    console.log("Hey its a Post Request");
    res.send('Hello Post World!');
});

app.put('/', (req, res) => {
    console.log("Hey its a put Request");
    res.send('Hello put World!');
});

app.delete('/', (req, res) => {
    console.log("Hey its a delete Request");
    res.send('Hello delete World!');
});

// Chaining of requests
// app.get('/', (req, res) => {
//     console.log("Hey its a GET Request");
//     res.send('Hello World!');
// }).post('/', (req, res) => {
//     console.log("Hey its a Post Request");
//     res.send('Hello Post World!');
// }).put('/', (req, res) => {
//     console.log("Hey its a put Request");
//     res.send('Hello put World!');
// }).delete('/', (req, res) => {
//     console.log("Hey its a delete Request");
//     res.send('Hello delete World!');
// });


app.get('/index', (req, res) => {
    console.log("Hey its a Test index");
    res.sendFile('/template/test.html', { root: __dirname });
});

app.get('/api', (req, res) => {
    res.json(
        {
            "name": "Ankit",
            "Course": "MERN",
            "StdId": "MCA2024041",
            "email": "ankitsrajputans@gmail.com",
            "age": 25
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
