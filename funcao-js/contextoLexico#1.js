const valor = 'Global'

function funcao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    funcao()
}

exec()