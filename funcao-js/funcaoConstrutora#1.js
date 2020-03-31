function Carro(velocidadeMaxima = 200, delta = 5) {

    // Atributo Privado - Não pode ser alterado pelo usuário
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo pulico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())




const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())