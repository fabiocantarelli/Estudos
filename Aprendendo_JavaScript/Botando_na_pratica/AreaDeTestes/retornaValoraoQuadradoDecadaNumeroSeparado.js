function squareDigits(num){
    let numString = num.toString()
    let array = []

    for(let i =0 ; i < numString.length; i++){
        num = numString[i]*numString[i]
        array.push(num)

    }
    let resultadoFinal = array.join('')
    return parseInt(resultadoFinal)
}


console.log(squareDigits(9119))