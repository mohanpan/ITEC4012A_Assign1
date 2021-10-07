//requiring express
const express = require('express');
//initializing the express app
const app = express();
//specifying a port to listen on localhost:9000
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("ITEC 4012A Web Application Frameworks - Assignment 1 \n\n Mohan Pan 101032246");
});

app.get('/api/penguins', (req, res) => {
    //call to database

    //return dummy data
    const penguins = ["Fun facts about penguins: ", "penguin fact 1 ", "penguin fact 2 ", "penguin fact 3 ", "penguin fact 4 ", "penguin fact 5 ", "penguin fact 6 ", "penguin fact 7 ", "penguin fact 8 ", "penguin fact 9 ", "penguin fact 10"];
    res.send(JSON.stringify(penguins));
});

app.get('/api/bears', (req, res) => {
    //call to database

    //return dummy data
    const bears = ["Fun facts about bears: ","bear fact 1", "bear fact 2 ", "bear fact 3 ", "bear fact 4 ", "bear fact 5 ", "bear fact 6 ", "bear fact 7 ", "bear fact 8 ", "bear fact 9 ", "bear fact 10"];
    res.send(JSON.stringify(bears));
});

//running the express http server on the port we specified
app.listen(port, () => {
    console.log ("Listening on port", port);
});