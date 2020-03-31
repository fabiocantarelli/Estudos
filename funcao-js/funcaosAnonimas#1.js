//function tradicional

const soma = function(x, y) {

    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)


//Usando o método de arrow function
const imprimirResultado2 = (a1, b1, operacao2 = soma) => {
    console.log(operacao2(a1, b1))
}

imprimirResultado2(3, 4)
imprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: () => { console.log("Olá Mundo!") }
}

pessoa.falar()