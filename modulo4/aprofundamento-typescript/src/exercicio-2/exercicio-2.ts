//2

type Amostra = {
    numeros: [1, 2, 45, 12, 67, 90, 93,32, 1342431,14231,1343,56456,76443]
}

function obterEstatisticas(Amostra:number[]) {

    const numerosOrdenados:number[] = Amostra.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of Amostra) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[Amostra.length - 1],
        menor: numerosOrdenados[0],
        media: soma / Amostra.length
    }

    return estatisticas
}

// console.log(obterEstatisticas([1, 2, 4, 6]))