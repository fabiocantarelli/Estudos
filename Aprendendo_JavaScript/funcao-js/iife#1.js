// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    const a = 'Teste'
    this.a = a
    console.log(this.a)
})()

console.log(this.a)