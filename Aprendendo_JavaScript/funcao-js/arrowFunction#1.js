// Funções Arrow

let dobro1 = function(a1) {
    return 2 * a1
}

console.log(dobro1(2))

dobro = (a) => {

    return a * 2

}

console.log(dobro(Math.PI))


dobro2 = a => 2 * a // Return implícito
console.log(dobro2(200))


ola = () => 'Olá'
console.log(ola())