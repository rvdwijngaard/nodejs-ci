var Customer = require('./lib/index');

var customer = new Customer();

customer.getBalance(function (err, balance) { 
    console.log("Your balance is now: $" + balance);
})