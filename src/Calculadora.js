/*jshint node:true*/
'user strict';

function Calculadora(Number1, Number2) {
    this.number1 = Number1;
    this.number2 = Number2;
}

Calculadora.prototype = {
    constructor : Calculadora,
    soma : function () {
        return this.number1 + this.number2;
    }
}

module.exports = Calculadora;