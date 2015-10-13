function geraSequencia(mensagem) {
    var sequencia = "";
    var novoDigitos = "";
    for (var i = 0; i < mensagem.length; i++) {
        novosDigitos = trocaLetraPorNumeros(mensagem[i]);
        if (sequencia.length > 0) {
            if ( sequencia[sequencia.length-1] == novosDigitos[0] ) {
                sequencia = sequencia + "_";
            }
        }
        sequencia = sequencia + novosDigitos;
    };
    return sequencia;
}

function trocaLetraPorNumeros(letra) {
    letra = letra.toUpperCase();
    switch (letra) {
        case 'A':
            return '2';
        break
        case 'B':
            return '22';
        break
        case 'C':
            return '222';
        break
    }
}
