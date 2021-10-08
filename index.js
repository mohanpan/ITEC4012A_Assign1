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
    const penguins = ["Fun facts about penguins: ", "1. Never freeze", "2. Have enough fat to keep its body temperature", "3. Feathers are waterproof", "4. Penguins mean fat birds", "5. penguin in ancient China means birds who are standing", "6. The wings of birds have become vestigial, and these birds become penguins", "penguin fact 7 ", "penguin fact 8 ", "penguin fact 9 ", "penguin fact 10"];
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