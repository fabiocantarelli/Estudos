//Par nome /Valor

const saudacao = 'Ola Mundo !' //Cosntexto léxio 1

function exec(){
    const saudacao = 'Olá para a função !' //Contexto léxio 2
    return saudacao
}

console.log(saudacao)
console.log(exec())


//Objetos são grupos aninhados de pares nome/valor

const cliente ={
    nome: 'Pedro',
    Idade: '32 anos',
    Altura: 1.84,
    endereco:{
        rua: 'Andradas',
        numero: 200,
        Bairro: 'Centro'
    }
}

console.log(cliente)