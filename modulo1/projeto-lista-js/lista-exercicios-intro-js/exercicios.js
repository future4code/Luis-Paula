// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const pergunta1 = prompt('Digite o valor da altura do retâgulo')
  const pergunta2 = prompt('Digite o valor da largura do retângulo')

  const valor = (pergunta1 * pergunta2)

  console.log(valor)

}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoNascimento = prompt('Digite o ano de seu nascimento')

  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome aqui')
  const idade = prompt('Digite sua idade aqui')
  const email = prompt('Digite seu email aqui')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor0 = prompt('Digite sua primeira cor favorita')
  const cor1 = prompt('Digite sua segunda cor favorita')
  const cor2 = prompt('Digite sua terceira cor favorita')

  const array = [cor0, cor1, cor2]
  
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiuscula = string.toUpperCase()

  return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculo = custo/valorIngresso

  return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoStrings = string1.length === string2.length

  return tamanhoStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const novaArray = array[array.length-1]
  const novaArray1 = array[0]
  array[array.length-1] = novaArray1
  array[0] = novaArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.toUpperCase() === string2.toUpperCase()
  return comparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o ano de seu nascimento'))
  const anoRg = Number(prompt('Digite o ano que sua carteira de identidade foi emitida'))
  
  const vinteAnosOuMenos = anoAtual - anoNascimento <= 20 && anoAtual - anoRg >= 5
  console.log(vinteAnosOuMenos) 
  

  const entre20E50Anos = anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - anoRg >= 10
  console.log(entre20E50Anos)

  const maiorDe50Anos = anoAtual - anoNascimento > 50 && anoAtual - anoRg >= 15
  console.log(maiorDe50Anos)

  console.log(vinteAnosOuMenos || entre20E50Anos || maiorDe50Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = ano % 400 === 0|| ano % 4 === 0 && ano %100 !== 0

  return anoBissexto
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Você possui ensino médio completo?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
  const primeiraPergunta = idade === 'sim' === true

  const segundaPergunta = ensinoMedio ==='sim' === true

  const terceiraPergunta = disponibilidade === 'sim' === true

  console.log(primeiraPergunta && segundaPergunta && terceiraPergunta === true)

}