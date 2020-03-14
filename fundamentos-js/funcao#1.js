// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN
imprimirSoma(2, 5, 6, 8, 9)//Ignora depos do "5" somando apenas 2 + 5 = 7

//Funcao com reetorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Undefined + 1 = NaN

                                                                                                                                           