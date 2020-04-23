class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')

p1.falar()

//Meu metodo

function NovaPessoa(nome) {
    this.nome = nome

    this.falar2 = () => { console.log(`Meu nome é ${this.nome}`) }
}


const p2 = new NovaPessoa('Fabio')
const p3 = new NovaPessoa('Isadora')

p2.falar2()
p3.falar2()