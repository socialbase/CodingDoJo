/*jshint node:true*/
'use strict';

var should = require('chai').should();
var Calculadora = require('../src/Calculadora.js');

describe('Calculadora', function() {
    it('create calculadora', function () {
        var myCalculadora = new Calculadora(2,2);
        myCalculadora.should.have.property('number1', 2);
        myCalculadora.should.have.property('number2', 2);
    });
    it('should add two numbers', function(){
        var myCalculadora = new Calculadora(3,7);
        myCalculadora.soma().should.equals(10);
    });
});