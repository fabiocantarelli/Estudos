let valor = 128
let arrow = {
    log1:0,
    log2:0.30,
    log3:0.48
}

let resultado = Math.log10(valor)

if(resultado < 0){
    console.log('Não existe')
}else{
    console.log(resultado)
}

console.log(Math.sqrt(256))
console.log(16*16)

// log(4) = log 2² = 2 . (log(2)) = 2 . 0,3 = 0,6 
// log(128) = log 2
// log(5)
// log(0,000064) = Não existe, resultado negativo

d