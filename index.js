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
    const penguins = ["Fun facts about penguins:", "1. Never freeze", "2. Have enough fat to keep its body temperature", "3. Feathers are waterproof", "4. Penguins mean fat birds", "5. penguin in ancient China means birds who are standing", "6. The wings of birds have become vestigial, and these birds become penguins", "7. The biggest penguin is Emperor penguin, who can weight more than 30kg!", "8. The smallest penguin is Eudyptula minor, and it is truly blue!", "9. Almost 3% of the water in the Antarctic Circle is made by penguin's urine, so don't drink the water there :)", "10. Penguin can jump 1.8m high!"];
    res.send(JSON.stringify(penguins));
});

app.get('/api/bears', (req, res) => {
    //call to database

    //return dummy data
    const bears = ["Fun facts about bears: ","1. With well training and love, bears can hug you, watch TV with you, water your flowers and host your wedding", "2. Polar bear's fur is empty in the center, it is waterproof and heat-protected", "3. Polar bear has fuzz on its sole, so it can walk on the ice not slip", "4. Canada Manitoba Churchchill has more polar bears not human beings", "5. Bears have two layers of fur, one for keep warm, the other for protect that one from water.", "6. Only polar bear is meat only bear.", "7. Sun bear has longest tongue", "8. The heart beat of bear is 40 per mins, in winter sleep, that decrease to 8 per mins.", "9. Not like other mammal, bears can see multiple colors, too!", "10. Panda has an extra thumb compare to other bears, this is use to hold on to bamboo lol"];
    res.send(JSON.stringify(bears));
});

//running the express http server on the port we specified
app.listen(port, () => {
    console.log ("Listening on port", port);
});