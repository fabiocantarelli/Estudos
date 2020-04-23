//Equilátero : 3 Lados iguais
//Isóceles : 2 Lados iguais
//Escaleno : todos os lados são diferentes

function tipoDeTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoC === ladoA) {
        console.log('3 Lados iguais é equilátero !')
    } else if (ladoA === ladoB && ladoA != ladoC || ladoB === ladoC) {
        console.log('2 Lados iguais é isóceles !')
    } else {
        console.log('Todos os lados são diferentes é escaleno !')
    }
}

tipoDeTriangulo(3, 3, 3)
tipoDeTriangulo(3, 3, 1)
tipoDeTriangulo(4, 1, 3)