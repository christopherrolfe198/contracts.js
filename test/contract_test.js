var Contract = require('../src/contract');
var should = require('should');

/* Set up */
function Test() {
}

Test.prototype.testMethod = function(arg) {
  this.args = arg;
  console.log('TEST METHOD CALLED');
}

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

  describe('bind()', function() {

    it('should bind a contract to an instance', function() {
      TestContract.bind(Test);

      global.contractRepository.should.have.property('contracts', { 'TestContract' : TestContract });
    });

  });

  describe('resolve()', function() {

    it('should resolve an instance of the class', function() {
      var bound = TestContract.resolve();

      bound.should.be.an.instanceof(Test);
    });

  })

});