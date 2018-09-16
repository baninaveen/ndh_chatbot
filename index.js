'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;
// create serve and configure it.


app.get('/webhook', function (req, res) {

    let dialogflowData = req.body.results;
    console.log(dialogflowData);

});

app.listen(port, function () {
    console.log("Server is up and running...");
});