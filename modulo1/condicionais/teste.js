// Exercícios de interpretação de código
//1
//a) Verifica se o resto da divisão de um número por dois dará zero.
//b) Números pares
//c) Números ímpares

//2
//a) Para dizer quanto custa uma fruta escolhida.
//b) O preço da fruta Maçã é R$ 2.25.
//c) O preço da fruta Pêra é R$ 5.5
// O preço da fruta Pêra é R$ 5.
//Pois sem o break vai permitir que o código continue rodando e vá para o default.

//3
//a) Está pedindo para que o usuário digite um número, transformando strings em números.
//b) Se digitar o 10 vai aparecer a mensagem:
// Esse número passou no teste.
// Se o número for -10 vai dar erro e não vai aparecer nenhuma mensagem.
//c) Sim haverá erro no console, a mensagem "Essa mensagem é secreta"
// não vai aparecer pois a variável mensagem não está definida fora da função.
// E o console.log(mensagem) não reconhece como uma variável definida pois ele está fora da função.

// Exercícios de escrita de código
//1
//a) e b)
const perguntaIdade = Number(
  prompt("Qual a sua idade? Utilize apenas números")
);
//c)
if (perguntaIdade >= 18) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}

//2
const turnoDoDia = prompt(
  "Qual é o turno que você estuda? Digite M para matutino, V para vespertino ou N para noturno"
).toUpperCase();
if (turnoDoDia === "M") {
  console.log("Bom Dia");
} else if (turnoDoDia === "V") {
  console.log("Boa Tarde!");
} else if (turnoDoDia === "N") {
  console.log("Boa Noite!");
} else {
  console.log("Por favor, digite um dos três turnos indicados!");
}

//3
const turnoDoDia = prompt(
  "Qual é o turno que você estuda? Digite M para matutino, V para vespertino ou N para noturno"
).toUpperCase();
switch (turnoDoDia) {
  case "M":
    console.log("Bom Dia");
    break;

  case "V":
    console.log("Boa Tarde!");
    break;

  case "N":
    console.log("Boa Noite!");
    break;

  default:
    console.log("Por favor, digite um dos três turnos indicados!");
    break;
}

//4
const generoFilme = prompt(
  "Qual o gênero do filme que vocês irão assistir?"
).toLowerCase();
const valorDoFilme = Number(
  prompt("Qual o valor do ingresso em reais? Somente números por favor")
);
if (generoFilme === "fantasia" && valorDoFilme < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

// Desafios
//1
const generoFilme = prompt(
  "Qual o gênero do filme que vocês irão assistir?"
).toLowerCase();
const valorDoFilme = Number(
  prompt("Qual o valor do ingresso em reais? Somente números por favor")
);
const lanchinho = prompt(
  "Escolha um lanchinho para ver o filme!"
).toLowerCase();
if (generoFilme === "fantasia" && valorDoFilme < 15) {
  console.log("Bom filme!");
  console.log(`Aproveite o(a) seu(a) ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
  console.log(
    `Você só poderá comer seu(a) ${lanchinho} se o seu amigo concordar com o filme :(`
  );
}
