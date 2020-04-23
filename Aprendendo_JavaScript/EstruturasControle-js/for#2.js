const notas = [6.7, 8.1, 9.9, 4.2, 7.2, 7.1, 1.9]
    // "in" utiliza para acessar o índice do array
for (let i in notas) {
    console.log(i, notas[i])
}

/*
0 6.7
1 8.1
2 9.9
3 4.2
4 7.2
5 7.1
6 1.9
*/

const pessoa = {
    nome: 'Fabio',
    idade: 19,
    cidade: 'Santa Maria',
    estado: 'Rio Grande Do Sul'
}

for (let atributo in pessoa) {
    console.log(atributo + " = " + pessoa[atributo])
}