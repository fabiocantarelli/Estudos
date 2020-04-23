function resolve(ax2, b2, c) {
    //Calcula o Delta
    // b2 ** 2 eleva o b ao quadrado.

    let Delta = (b2 ** 2) - (4 * ax2 * c)

    // Se o Delta △ for menor que 0 não prossegue para a bhaskara .
    if (Delta < 0) {
        console.log('Delta Negativo')
    } else {
        // Faz a operação de bhaskara : -b ± Raiz de △ / 2 x a
        let a1 = ((-b2 + Math.sqrt(Delta)) / 2 * ax2).toFixed(3)
        let a2 = ((-b2 - Math.sqrt(Delta)) / 2 * ax2).toFixed(3)
            // Retorna o resultado
        console.log(`X' = ${a1}, X" = ${a2}`)
    }


}

resolve(1, 6, 6)
resolve(2, 6, 2)
resolve(2, 6, 2)
resolve(6, 1, 3)