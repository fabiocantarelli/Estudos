let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(produto)

produto.preco =  null //Sem preço
console.log(!!produto.preco)
console.log(produto)


/*

undefined ainda não foi iniciado, diferente de null que é um
valor nulo, ou seja, um valor zerado mas que já foi iniciado.

*/
