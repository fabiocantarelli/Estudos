const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Nota for menor que 7 retorna valor falso -> "Reprovado"
// Nota maior ou igual a 7 retorna o valor true -> "Aprovado"

console.log(resultado(4))
console.log(resultado(7.1))
console.log(resultado(10))