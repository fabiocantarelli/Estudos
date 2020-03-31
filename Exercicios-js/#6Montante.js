//Capital inicial
//Taxa de juros
//Tempo de aplicação - *Fixado em semanas*

function montanteSimples(capitalInicial, TaxaDeJuros, TempoDeAplicação) {
    let resultadoSimples = (capitalInicial * TaxaDeJuros * TempoDeAplicação).toFixed(2)
    console.log(`Montante Simples referente é = R$${resultadoSimples} Referente a ${TempoDeAplicação} semana(s)`)
}


montanteSimples(3000, 0.10, 2)
montanteSimples(5218, 0.15, 2)

console.log('---------------------------MONTANTE------------------------------------')

let montanteComposto = (capitalInicial, TaxaDeJuros, TempoDeAplicação) => {
    let resultadoComposto = capitalInicial * (Math.pow(1 + TaxaDeJuros, TempoDeAplicação))
    console.log(`Montante Composto referente é = R$${resultadoComposto.toFixed(2)} Referente a ${TempoDeAplicação} semana(s).`)
}

montanteComposto(2000, 0.10, 2)
montanteComposto(2000, 0.15, 2)