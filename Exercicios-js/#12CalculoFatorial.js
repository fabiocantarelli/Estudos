let fatorado = []
function Fatorando (Valor) {

    if(Valor == 0){
        return 1;
    }else{
       return Valor * Fatorando(Valor - 1)
       fatorado.push(Valor)
    }
}

function ResultadoFatorado (ValorA){
    console.log(`Resultado da fatoração de ${ValorA} é ${Fatorando(ValorA)}`)
}

console.log(fatorado)
ResultadoFatorado(10)