'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


var port = process.env.PORT || 8080;
// create serve and configure it.


app.get('/webhook', function (req, res) {
    res.send('Hello NDH Chatbot');

});

app.listen(port, function () {
    console.log("Server is up and running...");
});