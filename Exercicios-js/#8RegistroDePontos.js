let N_Arrays = 21
let Jogos = [3, 38, 30, 10, 88, 14, 23, 4, 20, 5, 18, 82, 15, 13, 56, 10, 86, 65, 48, 60, 100]

function ComparaRegistros(PontuacaoJogoAtual) {

    Jogos.push(PontuacaoJogoAtual)

    let MaiorPontuacao = Math.max(...Jogos)
    let MenorPontuacao = Math.min(...Jogos)

    //console.log(Jogos)

    console.log('--------------------------------------------')
    console.log(`Sua pontuação do jogo atual é : ${PontuacaoJogoAtual} pts`)
    console.log('--------------------------------------------')

    console.log(`Sua melhor pontuação : ${MaiorPontuacao} pts`)
    console.log('--------------------------------------------')

    console.log(`Sua pior pontuação : ${MenorPontuacao} pts`)
    console.log('--------------------------------------------')
    //length conta o número de elementos presentes no array
    console.log(`Quantia de jogos jogados : ${Jogos.length} Jogos`)
    console.log('--------------------------------------------')

}

ComparaRegistros(20)
ComparaRegistros(220)
ComparaRegistros(300)
ComparaRegistros(1)