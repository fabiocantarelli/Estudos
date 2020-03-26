// Soma todos os parametros do array "arguments"
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

//Parametros passados a funcao.
console.log(soma())
console.log(soma(1.1))
console.log(soma(1))
console.log(soma(2, 3, 5, 1.2))
console.log(soma("a", "b", "c"))