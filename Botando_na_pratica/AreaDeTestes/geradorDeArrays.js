//Gera um array vazio para ser preenchido do zero
let arrayAleatorio = []

//Funcao com 3 valores, valor Min e valor Max para gerar valor aleatório.
//E o terceiro valor é a quantidade de números aleatórios que vão ser gerados e inseridos no array.

function gerar(valorMin, valorMaximo, QuantidadeDeArrays) {

    // For que gera valores aleatórios
    for (let i = 0; i < QuantidadeDeArrays; i++) {
        // Gera Valor aleatório
        let valor = Math.ceil(Math.random() * (valorMaximo + valorMin)) - valorMin

        //Insere os valores no array cada vez que se repete
        arrayAleatorio.push(valor)
    }

    // Console fora do laço para mostrar apenas o valor do array completamente preenchido.
    console.log(`###########################################################`)
    console.log('')
    console.log(`let N_Arrays = ${QuantidadeDeArrays}`)
    console.log(`let Array = [${arrayAleatorio}] `)
    console.log('')
    console.log(`###########################################################`)

    // Para apagar o array e poder ser feita mais de uma geração.
    arrayAleatorio = []
}

//gerar(0, 100, 30)
//gerar(0, 10, 5)
gerar(0, 10, 20)