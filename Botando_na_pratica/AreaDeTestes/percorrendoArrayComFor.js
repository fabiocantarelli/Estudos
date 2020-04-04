//Gerado a partir do Gerador de Arrays que fiz.
let N_Arrays = 30
let Array = [90, 13, 7, 59, 24, 66, 93, 34, 73, 15, 99, 49, 18, 7, 46, 90, 9, 60, 7, 54, 58, 76, 61, 0, 49, 25, 51, 3, 71, 32]

//Caminha por todos os itens do array, indice por indice usando ' for '
for (let i = 0; i < N_Arrays; i++) {
    console.log(`Índice ${i} -> `, Array[i])
}

//Ordena o array em ordem crescente Array.sort()
console.log("")
console.log("Ordena em ordem crescente o array :")
console.log(Array.sort())