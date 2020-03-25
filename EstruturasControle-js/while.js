//Gera um valor aleatório entre uma valor minimo e um valor máximo.

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
        //Conta valor -> Math.random "Gera valor aleatório entre 0 e 1"

    //*(max - min) + min -> server para aumentar o rage de possibilidaes multiplicando os valores 0 e 1.
    return Math.floor(valor)

    //Math.floor -> "Retorna o maior inteiro que é menor ou igual a um número"
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 4)
    console.log(`Testado o valor -> ${opcao}`)
}

console.log("Fim do laço" + ` Valor "${opcao}" encontrado !`)