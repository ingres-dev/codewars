function likes(names) {
    const numNames = names.length; // Armazena o número de nomes para simplificar a leitura

    switch (numNames) {
        case 0:
            // 0 nomes
            return 'no one likes this';

        case 1:
            // 1 nome (singular: likes this)
            return names[0] + ' likes this'; 

        case 2:
            // 2 nomes (plural: like this)
            return names[0] + ' and ' + names[1] + ' like this';

        case 3:
            // 3 nomes (plural: like this)
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';

        default:
            // 4 ou mais nomes (plural/outros: like this)
            const others = numNames - 2;
            return names[0] + ', ' + names[1] + ' and ' + others + ' others like this';
    }
}
// função que não funcionou por concordância verbal, mas que ainda pode ser uma escolha melhor em alguns casos


// function likes(names) {
//     const likes = null;
//     let resposta = '';
//     let dadosResposta = [' likes this',' and ', ', ' ,' and 2 others like this']
//     if (names[0] == null){
//     return 'no one likes this'
//     }
//     else if(names[3] === 0){
//         let contagem = 0;
//         for (let y = names.length - 1; y >= 0; y--) {
//             resposta = resposta + names[contagem] + dadosResposta[y];
//             contagem++;
//         }
//         return resposta;
//     }

// }