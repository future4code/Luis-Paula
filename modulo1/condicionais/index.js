const nomeCompleto = prompt("Digite aqui seu nome completo");
const tipoDeJogo = prompt(
  "Qual o tipo de jogo? IN(internacional) ou DO(doméstico)"
).toUpperCase();
const etapaDoJogo = prompt(
  "Qual a etapa do jogo? FI(final), SF(semi-final) ou DT(decisão de terceiro lugar)"
).toUpperCase();
const categoria = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4"));
const quantidadeDeIngressos = Number(
  prompt("Quantos ingressos você vai comprar? Somente números por favor!")
);
console.log(`Nome do cliente: ${nomeCompleto}`);
switch (tipoDeJogo) {
  case "IN":
    console.log(`Tipo de jogo: Internacional`);
    break;
  case "DO":
    console.log(`Tipo de jogo: Doméstico`);
    break;
  default:
    console.log(`Por favor, insira um valor válido.`);
    break;
}
switch (etapaDoJogo) {
  case "FI":
    console.log(`Etapa do jogo: Final`);
    break;
  case "SF":
    console.log(`Etapa do jogo: Semi-final`);
    break;
  case "DT":
    console.log(`Etapa do jogo: Decisão de terceiro lugar`);
    break;
  default:
    console.log(`Por favor, insira um valor válido.`);
}
console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
console.log(`================Valores===============`);
const calcularValorDeIngressos = (valor) => {
  if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 1980.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 1320.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 880.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 330.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 1320.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 880.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 540.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 220.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 660.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 440.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 330.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 170.0 * 4.1)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 1980.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 1320.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 880.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 330.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 1320.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 880.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 540.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 220.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1) {
    console.log(`Valor do ingresso: ${(valor = 660.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2) {
    console.log(`Valor do ingresso: ${(valor = 440.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3) {
    console.log(`Valor do ingresso: ${(valor = 330.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  } else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4) {
    console.log(`Valor do ingresso: ${(valor = 170.0)}`);
    console.log(`Valor total: ${valor * quantidadeDeIngressos} `);
  }
};
calcularValorDeIngressos();
