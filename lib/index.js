function Customer(name) {
    this.name = name;
}

Customer.prototype.getBalance = function (callback) { 
    setTimeout(callback(null, 2500), 1000);
}

Customer.prototype.UnTestedFunction = function (callback) { 
    console.log("an untested function");
}

module.exports = Customer;