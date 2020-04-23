function solution(number){
    //let array = []
    let soma = 0 

for(let i = 1; i < number;i++){
    if(i%3 == 0 || i%5 == 0){
        soma+=i
    }
    
}

return soma
}

console.log(solution(10))