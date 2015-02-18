﻿var superagent = require("superagent");
var chai = require("chai");
var expect = chai.expect;
var should = require("should");

describe("Index", function () {
    it("renders HTML", function (done) {
        superagent.get("http://localhost:3000/")
      .end(function (e, res) {
            (e === null).should.equal(true);
            res.text.should.equal("Hey buddy!");
            done();
        });
    });
});