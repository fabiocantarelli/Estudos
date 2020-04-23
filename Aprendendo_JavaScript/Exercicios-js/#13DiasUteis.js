
function Semana(Dia){
    switch(Dia){
        case 1:
            case 7:
            console.log('Fim de semana - Dia de Churrasco !')
            break
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                console.log('Dia útil - Dia de Trabalhar e Estudar !')
            break
        default:
            console.log('Valor inválido')
        break
    }
}


Semana('dia2')
Semana('1')
Semana(1)
Semana(7)
Semana(8)
Semana(3)
