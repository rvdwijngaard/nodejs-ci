var assert = require('assert');
var Customer = require('../lib/index');


describe('Test Suite 1', function () {
    customer = new Customer("piet");
    it('Open Balance', function(done) {
        customer.getBalance(function (err, balance) { 
            assert.equal(balance, 2500, "the balance is ok");
            done();
        });
    })

    it('Test 2', function() {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    })

    it('Name should be filled', function () {
        
       assert.ok(customer.name === "piet", "This should fail");
    })
})
