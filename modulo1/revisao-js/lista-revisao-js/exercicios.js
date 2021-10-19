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
function retornaNPrimeirosPares(n) {
  const arrayPares = [];
  for (let i = 0; arrayPares.length < n; i++) {
    if (i % 2 === 0) {
      arrayPares.push(i);
    }
  }
  return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return 'Equilátero';
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return 'Isósceles';
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return 'Escaleno';
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const organizarArray = (a, b) => {
    const comparacao = a - b;
    return comparacao;
  };
  const novaArray = array.sort(organizarArray);
  const segundoMaiorEsegundoMenor = [
    novaArray[novaArray.length - 2],
    novaArray[1],
  ];
  return segundoMaiorEsegundoMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const entrada = {
    nome: 'O Diabo Veste Prata',
    ano: 2047,
    diretor: 'David Frinnkel',
    atores: ['Meryl Stepe', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  };
  filme = {
    ...entrada,
    nome: filme.nome,
    ano: filme.ano,
    diretor: filme.diretor,
    atores: filme.atores,
  };
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const usuario = {
    nome: 'Luis',
    idade: 24,
    email: 'luisgustavordp1@gmail.com',
    endereco: 'sha cj 6',
  };
  pessoa = {
    ...usuario,
    nome: 'ANÔNIMO',
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco,
  };
  return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  //   const pessoasQueQueremEntrar = [
  //     { nome: 'Paula', idade: 12, altura: 1.8 },
  //     { nome: 'João', idade: 20, altura: 1.3 },
  //     { nome: 'Pedro', idade: 15, altura: 1.9 },
  //     { nome: 'Luciano', idade: 22, altura: 1.8 },
  //     { nome: 'Artur', idade: 10, altura: 1.2 },
  //     { nome: 'Soter', idade: 70, altura: 1.9 },
  //   ];
  //   pessoas = [
  //     {
  //       ...pessoasQueQueremEntrar,
  //       nome: pessoas.nome,
  //       idade: pessoas.idade,
  //       altura: pessoas.altura,
  //     },
  //   ];
  //   const idadeEAltura = () => {
  //     if (pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5) {
  //       return idadeEAltura;
  //     }
  //   };
  //   return pessoas.map(idadeEAltura);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
