/* Exercícios de Interpretação
1: 
10
10, 5

2:
Vai dar erro pois a variável c não foi definida por let

3:
O programa recebe o número de horas trabalhadas por dia
e o valor ganho por dia de trabalho e divide valor/horas
para dar o quanto se recebe por hora trabalhada.
Melhores nomes para as variáveis seriam:
horasTrab e valorDia.
*/

//Exercício 1
const nome = prompt('Qual o seu nome?')
const idade = prompt('Qual a sua idade?')
console.log('Olá', nome,'você tem', idade, 'anos.')
console.log(typeof nome, typeof idade)
//Q1: Foi impressso undefined pois as variáveis não tem um valor
//Q2: Apareceu o valor das variáveis, duas strings

//Exercício 2
const pergunta1 = 'Você mora em apartamento?'
const pergunta2 = 'Você tem tatuagens?'
const pergunta3 = 'Você fala outro idioma?'
let resposta1 = 'Não'
let resposta2 = 'Sim'
let resposta3 = 'Sim'
console.log(pergunta1,'-', resposta1)
console.log(pergunta2,'-', resposta2)
console.log(pergunta3,'-', resposta3)

//Exercício 3
let a = 10
console.log('O valor de a é', a)
let b = 25
console.log('O valor de b é', b)
let c = 10
a = b
b = c
console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)

//Desafio
let w = Number(prompt('Insira um primeiro valor aqui'))
let z = Number(prompt('Insira um segundo valor aqui'))
let x = w + z
let y = w * z
console.log('Os valores inseridos foram:', w, 'e', z)
console.log('A soma dos dois números é:', x)
console.log('A multiplicação dos dois números é:', y)