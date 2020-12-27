//import libraries such as express Library

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
var Sent_Name = "";



//1.
// POST: /data: This api should return the data sent to it in JSON format in addition to your name,
// and it should return it in JSON format  too, 
//for example If I sent {“message”:”hello”} I should get the{“message”:”hello”, “name”:”Ahmed”}

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Your_Added_Name', (req, res) => {
    //Create Html Element in the url http://localhost:3000/Your_Added_Name 
    res.send('<form action="/post-Name" method="POST"> <h1>Backend_Assigment</h1> <br><br> <h4>Enter Your Name Please</h4><input type="text" name="Name"> <br><br> <button type="submit"> posting </button> ');
});

app.use('/post-Name', (req, res) => {
    try {
        Sent_Name = req.body.Name;
    } catch (error) {
        Sent_Name = "";
    }
    res.redirect('/data');
});

app.use('/data', (req, res) => {
    res.json({ message: "Hello", name: Sent_Name });
});



//2.
// GET: /greeting/<name>: This api should return a greeting message with the name sent in the URL,
// for example if I sent a GET request to /greeting/Ali I should get {“message”:”Hello Ali”}

app.get('/greeting/:name', function(req, res) {
    res.json({ message: "Hello " + req.params.name });
})

app.listen(3000, () => console.log('server started'));