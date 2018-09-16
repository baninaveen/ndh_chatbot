'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const dialogFlow = require('dialogflow');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;
// create serve and configure it.


app.post('/webhook', function (req, res) {

    console.log("Webhook is called");

});

app.listen(port, function () {
    console.log("Server is up and running...");
});