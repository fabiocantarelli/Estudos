//Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(1, 4))

//Retorno Implícito
const Subtracao = (a, b) => a - b
console.log(Subtracao(2, 3))

const imprimirValor = a => console.log(a)
imprimirValor('Valor mostrado!!!')                                                                                     