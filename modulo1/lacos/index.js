// Exercícios de interpretação de código
//1 - O programa vai dar um novo valor para a variável valor de 0 até 4.
// Então vai somar cada valor novo no valor antigo, sendo 1, 2, 3 e 4.
//Então vai imprimir no console o valor 10 que é a soma desses números.

//2
//a) - Vai ser impresso no console  19, 21, 23, 25, 27, 30.
//b) - Sim, é suficiente. Usando o código abaixo daria para ver o índice de todos os números.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   console.log(lista.indexOf(numero));
// }

//3
//a) - Iria aparecer 4 linhas e cada linha com o número correspondente de asteriscos.
//Pois o asterisco depende do número de linhas, no caso a linha 1 vai aparecer 1 e assim por diante.
//e o número de linhas é o número total, no caso 4.

//Exercícios de escrita de código
//1
let bichinhos = Number(prompt("Quantos bichinhos você tem?"));
const listaDosBichinhos = [];
if (bichinhos > 0) {
  for (let i = 0; i < bichinhos; i++) {
    let nomeDosBichinhos = prompt("Digite o nome dos seus bichinhos");
    listaDosBichinhos.push(nomeDosBichinhos);
  }
} else {
  console.log("Que Pena! Você pode adotar um pet!");
}
if (bichinhos > 0) {
  console.log(listaDosBichinhos);
} else {
} //Posso botar sem o último if, porém assim quando o resultado for 0.
//irá aparecer uma array vazia [] abaixo da mensagem de else.

//2
const array = [181, 80, 40, 21, 61, 120, 160, 200, 141, 101];
//a)
for (let i of array) {
  console.log(i);
}
//b)
for (i = 0; i < array.length; i++) {
  const divisao = array[i] / 10;
  console.log(divisao);
}
//c)
const arrayPares = [];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    arrayPares.push(array[i]);
  } else {
  }
}
console.log(arrayPares);
//d)
const arrayStrings = [];
for (i = 0; i < array.length; i++) {
  const frase = `O elemento do índex ${array.indexOf(array[i])} é: ${array[i]}`;
  arrayStrings.push(frase);
}
console.log(arrayStrings);
//e)
let maior = array[0];
let menor = array[0];
for (i = 0; i < array.length; i++) {
  if (menor > array[i]) {
    menor = array[i];
  } else {
  }
  if (maior < array[i]) {
    maior = array[i];
  } else {
  }
}
console.log(`O menor número é ${menor} e o maior número é ${maior}`);

// Desafios
//1
// let jogoDaAdvinhação = Number(
//   prompt("Vamos jogar um jogo de adivinhação? Por favor, digite um número")
// );
// const numeroEscolhido = 12;
// let mensagemVitoria = "Aeeeee porra! Você acertou!";
// while (jogoDaAdvinhação !== numeroEscolhido) {
//   if (jogoDaAdvinhação === 12) {
//   } else if (jogoDaAdvinhação < 12) {
//     console.log("Iiiiiih mas é ruim! Tenta de novo aí!");
//     console.log("É um número maior");
//     jogoDaAdvinhação = Number(
//       prompt("Tenta de novo aí, vai que você acerta dessa vez")
//     );
//   } else {
//     console.log("Iiiiiih mas é ruim! Tenta de novo aí!");
//     console.log("É um número menor");
//     jogoDaAdvinhação = Number(
//       prompt("Tenta de novo aí, vai que você acerta dessa vez")
//     );
//   }
// }
// console.log(mensagemVitoria);

//2
let jogoDaAdvinhação = Number(
  prompt("Vamos jogar um jogo de adivinhação? Por favor, digite um número")
);
const numeroEscolhido = Math.floor(Math.random() * 100 + 1);
let mensagemVitoria = "Aeeeee porra! Você acertou!";
while (jogoDaAdvinhação !== numeroEscolhido) {
  if (jogoDaAdvinhação === numeroEscolhido) {
  } else if (jogoDaAdvinhação < numeroEscolhido) {
    console.log("Iiiiiih mas é ruim! Tenta de novo aí!");
    console.log("É um número maior");
    jogoDaAdvinhação = Number(
      prompt("Tenta de novo aí, vai que você acerta dessa vez")
    );
  } else {
    console.log("Iiiiiih mas é ruim! Tenta de novo aí!");
    console.log("É um número menor");
    jogoDaAdvinhação = Number(
      prompt("Tenta de novo aí, vai que você acerta dessa vez")
    );
  }
}
console.log(mensagemVitoria);
//Na verdade o exercício 2 foi bem mais fácil que o 1 do desafio.
//Após entender a lógica fica tudo bem mais fácil.
//Trocar um número definido por um número aleatório é bem tranquilo.
//Apenas enteder o porque a operação math funciona que foi difícil.
//Ainda assim o primeiro ainda tá incompleto pois não consegui achar uma forma
//de contar a quantidade de vezes que dá o prompt.
