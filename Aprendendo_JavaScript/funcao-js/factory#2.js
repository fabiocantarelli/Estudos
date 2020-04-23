 function criarProduto(nome, preco) {
     return {
         nome,
         preco,
         desconto: 0.1
     }
 }

 console.log(criarProduto('Video Game', 2500.00))
 console.log(criarProduto('Smart TV', 1500.00))
 console.log(criarProduto('Ipod XL', 25000.00))