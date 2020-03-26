let contatador = 1

while (contatador <= 10) {
    console.log(`Contador "while" = ${contatador}`)
    contatador++
}
console.log("Fim do While")



for (let i = 1; i <= 10; i++) {
    console.log(`Contador "for" = ${i}`)
}
console.log("Fim do for")



const notas = [6.7, 8.1, 9.9, 4.2, 7.2]

for (let i = 0; i < notas.length; i++) {
    console.log("Nota = " + notas[i])
}