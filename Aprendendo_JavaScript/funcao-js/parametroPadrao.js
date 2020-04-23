// Estratégia para gerar um valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(1, 2, 3), soma1(), soma1(2, 4, 5), soma1(0, 0, 0))

//Estratégia 2, 3 3 4 gerar valor padrão 

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1

    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(1, 2, 1), soma2(1, 4, "1"), soma2(1, 5, 20), soma2(0, 0, 0))

// valor padrão do ES2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(1, 4, 9))