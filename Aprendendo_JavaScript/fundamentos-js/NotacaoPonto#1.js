console.log(Math.ceil(7.5))

const obj1 = {}
obj1.nome = 'bola'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando..')
    }
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')

obj3.exec()