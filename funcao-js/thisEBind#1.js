const pessoa = {
    saudacao: 'Bom dia !',
    conversa: 'Tudo bem ?',
    falar() {
        console.log(this.saudacao)
    },
    falar2() {
        console.log(this.conversa)
    }
}

pessoa.falar()

pessoa.falar2()

const falar = pessoa.falar

falar() // Conflito entre paradigmas: funcional e 00

const falarPessoa = pessoa.falar.bind(pessoa) // bind aponta para o objeto "pessoa"("Fica amarrado")
falarPessoa()