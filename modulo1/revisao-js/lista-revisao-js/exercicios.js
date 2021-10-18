// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let novaArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    novaArray.push(array[i]);
  }
  return novaArray;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const compararNumerosnaArray = (a, b) => {
    const comparacao = a - b;
    return comparacao;
  };
  return array.sort(compararNumerosnaArray);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const calcularPares = (a) => {
    const calculo = a % 2 === 0;
    return calculo;
  };
  return array.filter(calcularPares);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const calcularParesElevadosADois = (a) => {
    if (a % 2 === 0) {
      return a ** 2;
    }
  };
  return array
    .filter(calcularParesElevadosADois)
    .map(calcularParesElevadosADois);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1;
  let menorNumero = num2;
  if (num1 < num2) {
    maiorNumero = num2;
    menorNumero = num1;
  }
  const numeros = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero,
  };
  return numeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
