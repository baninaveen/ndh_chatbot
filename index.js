'use strict';

const {
    WebhookClient
} = require('dialogflow-fulfillment');
const {
    Card,
    Suggestion
} = require('dialogflow-fulfillment');

const express = require('express');
const request = require('request');
const BodyParser = require('body-parser');

app.use(bodyParser.json());
const agent = new WebhookClient({
    request,
    response
});

var port = process.env.PORT || 8080;
// create serve and configure it.
const app = express();

app.get('/webhook', function (req, res) {
    res.send('Hello NDH Chatbot');

});

app.listen(port, function () {
    console.log("Server is up and running...");
});