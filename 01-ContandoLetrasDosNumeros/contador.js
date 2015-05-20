var nums = [];

primi = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
];

dez = ['dez',
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa'
];

var soma = 0;
for (var i = 0; i < primi.length; i++ ) {
    var count = primi[i].length;
    console.log('num: ' + (i + 1)  + ' - ' + count );
    soma += count;
}
console.log('soma: ' + soma);