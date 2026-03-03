import express from 'express';
// const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.static('files'))


// App.Get, App.Post, App.Put, App.Delete...

app.get('/', (req, res) => {
    res.send('Hello Express Server!');
});

app.get('/about', (req, res) => {
    res.send('Hello Ankit Singh!');
});

app.get('/services', (req, res) => {
    res.send('WelCome to Services!');
});

app.get('/contact', (req, res) => {
    res.send('Reach out to us!');
});

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db/MongoDB
    // For URL : http://127.0.0.1:3000/blog/intro-to-mongo?mode=dark&loc=bly
    console.log(req.params); //{ slug : 'intro-to-js' }
    console.log(req.query); //{ mode: 'dark', loc: 'bly' }
    res.send(`Hello ${req.params.slug}`);
});

// app.get('/blog/:slug/:id', (req, res) => {
//     // logic to fetch {slug} from the db/MongoDB
//     res.send(`Hello ${req.params.slug} with ID ${req.params.id}`);
// });

// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Welcome to js tutorial!');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch python blog from the db/MongoDB
//     res.send('Welcome to python tutorial!');
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
