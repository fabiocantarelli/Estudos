function teste1(num) {
    if(num >= 7){
        console.log(num)
        console.log('Valor: ' + num)
    }
  }

  //teste1(6)
  //teste1(8)

function teste2(num){
    if(num > 7); { // Cuidado com o ';', não usar com estruturas de controle
        console.log(num)
    }
}

teste2(2)
teste2(120)