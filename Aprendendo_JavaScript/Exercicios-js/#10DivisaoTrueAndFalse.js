//Saber se um valor é divisivel, basta testar o resto, pois tera que dar sempre 0 

function Dividir(valor){
    let Resto = valor % 3
    if(Resto == 0){
        console.log(`Divisivel pois o resto é ${Resto}`)
    }else{
        console.log(`Não divisivel pois sobra ${Resto}`)
    }
}

Dividir(9)
Dividir(7)
Dividir(6)
Dividir(6.5)