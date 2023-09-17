const quantidadeDeAguaIngerida = 4.5

console.log(`
${quantidadeDeAguaIngerida < 1.5 ? 'Risco Alto - Você está ingerindo pouquíssima água, beba mais água!' :
        quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3 ? 'Risco Moderado - Você está ingerindo pouca água, beba mais!' :
            'Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!'

    }
`);