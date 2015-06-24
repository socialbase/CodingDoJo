/*jshint node:true*/
'use strict';

var should = require('chai').should();
var assert = require('chai').assert;
var Calculadora = require('../src/Calculadora.js');

describe('Calculadora', function() {
    it('create calculadora', function () {
        var myCalculadora = new Calculadora(2,2);
        myCalculadora.should.have.property('number1', 2);
        myCalculadora.should.have.property('number2', 2);
    });
    it('should sum two numbers', function(){
        var myCalculadora = new Calculadora(3,7);
        myCalculadora.soma().should.equals(10);
    });
    it('should subtract two numbers', function(){
        var myCalculadora = new Calculadora (10,5);
        myCalculadora.subtrair().should.equals(5);
    });
    it('should be a number type', function(){
        var myCalculadora = new Calculadora ('a',5);
        assert.isNotNumber(myCalculadora.subtrair());
    });
    it('should return negative numbers', function () {
        var myCalculadora = new Calculadora(4, 10);
        assert.ok(myCalculadora.subtrair() < 0);
    });

});