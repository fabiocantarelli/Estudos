const imprimirValor = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!!!')
    } else {
        console.log('Reprovado!!!')
        
    }
}

imprimirValor(6)
imprimirValor(8)
imprimirValor("Teste!!")//Cuidado com uso de String, javascript é fracamente tipado.