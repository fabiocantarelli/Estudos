const prod1 = {}
prod1.nome = 'Celular Mega'
prod1.preco = 4999.90
prod1['Desconto'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

// Obejeto não é a mesma coisa que Json
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)
console.log(typeof prod2)