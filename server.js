var express = require('express');
var vogels = require('vogels');
var app = express();

var Customer = require('./lib/index');
var customer = new Customer();

app.get("/", function (req, res) {
    customer.getBalance(function (err, balance) {        
        res.send("Hey buddy!");
    })
});

app.listen(80, function () {
    console.log('Express listening on port 80');
});