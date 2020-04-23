// Manipulando casas decimais. 
// "toFixed(2)" -> fixa em 2 casas após a virgula
carteira = (valorAtual, valorAdicionado) => {
    carteiraAbastecida = (valorAtual + valorAdicionado).toFixed(2)

    console.log(`Sua carteira possui R$ ${carteiraAbastecida}`)
}

carteira(0.2, 0.1)
carteira(2.2, 6.1)
carteira(2.2, 0.24)