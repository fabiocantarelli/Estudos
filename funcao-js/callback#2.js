const notas = [2.3, 7.2, 4.5, 9.2, 5.9, 6.9]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])

    }
}

console.log(notasBaixas1)

// Com callBack

const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Usando array e callback
const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)