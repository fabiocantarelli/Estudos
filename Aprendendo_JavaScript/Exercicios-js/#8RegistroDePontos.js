let pontuacao = [7,5,5,9,1,2,8,2,3,9,10,14] 

function VerificaPontuacao(pontuacao){
    let QtdDeRecordes = 0
    let PioresJogos = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    //Caminha pelo array atraves dos indices
    for(let i = 0; i < pontuacao.length; i++){
        //Condição que caso a pontuação atual for maior que a ponto 
        if(pontuacao[i] > maiorPontuacao){
          maiorPontuacao = pontuacao[i]
          QtdDeRecordes++ 
        }else if(pontuacao[i] < menorPontuacao){
        menorPontuacao = pontuacao[i]
            PioresJogos = i+1
        }
    }
    console.log(`Recordes: ${QtdDeRecordes}`)
    console.log(`Pior Jogo: ${PioresJogos}º Com pontuação: ${menorPontuacao}pts`)
}

VerificaPontuacao(pontuacao)