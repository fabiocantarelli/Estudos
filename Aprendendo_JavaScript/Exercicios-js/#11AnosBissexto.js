// Pra ser ano bissexto o valor tem que ser divisivel por 4 ou por 400 não sobrando resto de divisao
//E não pode ser divisivel por 100
function AnoBissexto(Ano){
    if(Ano % 4 == 0 || Ano % 400 == 0){
        console.log('True')

    }else{
        console.log('False')
    }
}

AnoBissexto(2016)