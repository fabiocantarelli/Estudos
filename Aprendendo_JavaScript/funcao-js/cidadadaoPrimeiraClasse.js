//Funcao em JS é First_Class Objetct (Cintizens)
//Higher-order function

//criar de forma literarl

function func1() {}

//Armazenar funcao em variavel

const func2 = function() {}

//Armazenar em array

const array = [function(a, b) { return a + b }, func1, func2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// Passar funcao como parametro

function run(fun) {
    fun()
}

run(function() { console.log('Executando a função !!!') })

// Funão pode ter uma outra funão dentro de outra função.

function soma(a, b) {
    console.log(a, b)
    return function(c) {
        console.log(`Soma entre os valores ${a}, ${b}, ${c}`)
        console.log("Teste = " + (a + b + c))
    }
}

soma(1, 3)(2)