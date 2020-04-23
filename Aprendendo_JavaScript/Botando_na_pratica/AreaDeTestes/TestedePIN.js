function validatePIN (pin) {
    //return true or false

    // Verifica se o pin possui apenas numeros, retorna valor booleano
    let tratamentodePIN  = /^[0-9]+$/;

     //console.log(tratamentodePIN.test(pin)) 

     // Testa  o valor do tartamento do pin
    if(tratamentodePIN.test(pin) == true){
        if(pin.length == 4 || pin.length == 6){
            return true
        }else{
            return false
        }       
    }else{
        return false
    }    
  }

  console.log(validatePIN("1234"))