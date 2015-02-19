require('newrelic');
var express = require('express');
var app = express();
var Customer = require('./lib/index');
var customer = new Customer;

app.get("/", function (req, res) {    
    customer.getBalance(function (err, balance) {        
        res.send("Hey buddy!");
    })
});

app.get('/sprintdemo', function (req, res) { 
    res.send('the sprint demo session with rine!');
});

var server = app.listen(process.env.PORT || 80, function () {
    console.log('listening: %s', server.address().port);
});