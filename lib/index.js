function Customer(name) {
    this.name = name;
}

Customer.prototype.getBalance = function (callback) { 
    setTimeout(callback(null, 2500), 1000);
}

module.exports = Customer;