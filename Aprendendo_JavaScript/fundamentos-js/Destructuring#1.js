// novo recurso do ES2015

const pessoa = {
    nome: 'Isadora',
    idade: 17,
    endereco:{
        rua: 'andradas',
        numero: 300
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log('nome: ', n, 'idade: ', i,'Anos')

const { endereco: {rua, numero}} = pessoa
console.log(rua, numero)