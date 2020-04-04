//Todo o aluno recebe nota de 0 a 100.
//Alunos com, nota abaixo de 40 são reprovados.
/*
    Regra das notas:  Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno.
    No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.

*/

VerificaNotas = (NotaDoAluno) => {
    if(NotaDoAluno >= 38){

        // Dividiu o valor por 5 e aredondou o resuultado assim multiplicando por 5.
        // 38/5 = 7,6  Arredondada para 8 . Ai fica 8*5 = 40 -> True.
     let NovaNota = Math.ceil(NotaDoAluno/5)*5

        console.log(`Aprovado sua nota é : ${NovaNota}`)

    }else if(NotaDoAluno < 38){
        console.log("Aluno reprovado")
    }
    
}

VerificaNotas(63)
VerificaNotas(38)
VerificaNotas(35)