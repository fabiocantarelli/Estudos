function calcular(a, b) {
    this.soma = () => { return a + b }
    this.sub = () => { return a - b }
    this.divisao = () => { return a / b }
    this.mult = () => { return a * b }
    console.log(`As operações entre ${a} e ${b} são : `)
}


const Calculado = new calcular(10, 2)

console.log(`A soma: ${Calculado.soma()}`)
console.log(`A subtração: ${Calculado.sub()}`)
console.log(`A divisão: ${Calculado.divisao()}`)
console.log(`A multiplicação: ${Calculado.mult()}`)