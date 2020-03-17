function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max:900, min:1}))

const obj = {max:100, min:10}
console.log(rand(obj))
console.log(rand({}))