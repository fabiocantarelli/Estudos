const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (contador in nums) {
    if (contador == 5) {
        break
    }
    console.log(`Indice ${contador} = ` + nums[contador])
}


for (contador2 in nums) {
    if (contador2 == 5) {
        continue
    }
    console.log(`Indice ${contador2} = ` + nums[contador2])

}


//Evitar esse tipo de estrutura 
/*externo: for(contador3 in nums){
        for(contador3a in nums ){
            if(contador3 == 2 && contador3a == 3) break externo
            console.log(`Par = ${contador3}, ${contador3a}`)
        }
}

console.log("Fim!")*/