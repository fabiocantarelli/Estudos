//Forma de tratar erros

function tratarErroElancar(erro){
    //throw new Error('Erro: 404')
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') 
    }catch (e){
        tratarErroElancar(e)
    }finally{
        console.log('Final => finally')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)