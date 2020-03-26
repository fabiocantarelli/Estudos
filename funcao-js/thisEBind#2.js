function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
            console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

//new pessoa



const pessoa2 = () => {
    this.idade2 = 0
    const self2 = this


    setInterval(() => {
        this.idade2++
            console.log(self2.idade2)
    }, 1000)

}

pessoa2()