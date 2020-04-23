// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variáveis externas á  função.

// Closure em ação

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
        console.log(x)
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())