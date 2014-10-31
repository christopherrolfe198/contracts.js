var Contract = require('../src/contract');
var should = require('should');

describe('contract', function () {

  var TestContract = new Contract('TestContract');

  describe('constructor', function () {

    it('should correctly add a name property to the contract', function () {
      TestContract.should.have.property('name', 'TestContract');
    });

  });

  describe('addMethod()', function() {

    it('should add a method and an array of arguments for a contract to meet', function() {
      TestContract.addMethod("testMethod", ["foobar", "baz"]);

      TestContract.methods.should.eql({ "testMethod" : ["foobar", "baz"] });
    });

    it('should add a method and a string argument for the contract to meeet', function() {
      TestContract.addMethod("testMethod", "foobar");

      TestContract.methods.should.eql({ "testMethod" : ["foobar"] });
    })

  });

});