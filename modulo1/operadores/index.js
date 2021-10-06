/* Exercícios de interpretação de código

1 -
a. False
b. False
c. True
d. boolean

2 -
O programa vai adicionar duas strings uma na outra, por exemplo:
se o primeiro número é 2 e o segundo 3, dará 23 e não a soma correta
que deve ser 5.

3 -
Para resolver isso basta adicionar o Number() na operação de soma. Saindo de:
const soma = primeiroNumero + segundoNumero
Para:
const soma = Number(primeiroNumero) + Number(segundoNumero).
Sendo assim transformando as strings para números.
*/


// Exercícios de escrita de código

//1
const idadeUsuario = prompt("Qual a sua idade?")
const idadeAmigo = prompt('Qual a idade do seu(a) melhor amigo(a)?')
console.log('Sua idade é:', idadeUsuario)
console.log('A idade do seu(a) melhor amigo é:', idadeAmigo)
const maiorMenor = idadeUsuario > idadeAmigo
const diferenca = Number(idadeUsuario - idadeAmigo)
console.log('Sua idade é maior que a do seu(a) melhor amigo(a)?', maiorMenor)
console.log('A diferença de idade entre vocês é:', diferenca)
console.log('=====================================================')

//2
const numeroPar = prompt('Insira um número par')
const resto = Number(numeroPar)%2
console.log('O número inserido foi:', numeroPar)
console.log('O resto da divisão deu:', resto)
// c) Ao dividir o vários números pares o resto sempre deu 0(zero).
// d) Ao dividir por um número ímpar o resto sempre dará 1(um).
console.log('=====================================================')

//3
const idaUsario = prompt('Qual a sua idade?')
const idaMeses = Number(idaUsario) * 12
const idaDias = Number(idaUsario) * 365
const idaHoras = Number(idaDias) * 24
console.log('Sua idade é:', idaUsario)
console.log('Sua idade em meses é:', idaMeses)
console.log('Sua idade em dias é:', idaDias)
console.log('Sua idade em horas é:', idaHoras)
console.log('=====================================================')

//4
const primeiroNumero = prompt('Insira o primeiro número')
const segundoNumero = prompt('Insira o segundo número')
const maior = Number(primeiroNumero) > Number(segundoNumero)
const igual = primeiroNumero === segundoNumero
const primDiv = primeiroNumero % segundoNumero === 0
const segDiv = segundoNumero % primeiroNumero === 0
console.log('O primeiro número inserido foi:', primeiroNumero)
console.log('O segundo número inserido foi:', segundoNumero)
console.log('O primeiro número é maior que o segundo?', maior)
console.log('O primeiro número é igual ao segundo?', igual)
console.log('O primeiro número é divisível pelo segundo?', primDiv)
console.log('O segundo número é divisível pelo primeiro?', segDiv)
console.log('=====================================================')

//Desafios
//1
let celsius;
let kelvin;
let fahrenheit;
kelvin = (77-32) * (5/9) + 273.15
console.log('77° Fahrenheit em Kelvin é:', kelvin)
fahrenheit = (80) * (9/5) + 32
console.log('80° Celsius em Fahrenheit é:', fahrenheit)
fahrenheit = (30) * (9/5) + 32
kelvin = (Number(fahrenheit)-32) * (5/9) + 273.15
console.log('30° Celsius em Fahrenheit e Kelvin é, respectivamente:', fahrenheit,'e', kelvin)
celsius = prompt('Insira uma temperatura em °C')
fahrenheit = (Number(celsius)) * (9/5) + 32
kelvin = (Number(fahrenheit)-32) * (5/9) + 273.15
console.log(celsius, 'Celsius em Fahrenheit e Kelvin é, respectivamente:', fahrenheit,'e', kelvin)
console.log('=====================================================')

//2
let quillowattHora;
quillowattHora = 280 * 0.05
console.log('Uma residência que consome 280 Quillowatt-hora de energia, paga: R$', quillowattHora)
quillowattHora = prompt('Insira um valor de consumo de  Quillowatt-hora')
quillowattHora = (Number(quillowattHora) * 0.05)
quillowattHora = quillowattHora - (quillowattHora * (15/100))
console.log('O valor pago com desconto de 15% é:', quillowattHora)
console.log('=====================================================')

//3
//a)
let lbs;
lbs = 20/2.2046
console.log('20 lbs equivalem a', lbs, 'kg')
console.log('=====================================================')
//b)
let oz;
oz = 10.5 * 0.035274
console.log('10.5 oz equivalem a', oz, 'kg')
console.log('=====================================================')
//c
let mi;
mi = 100 * 1609.34
console.log('100 mi equivalem a', mi, 'm')
console.log('=====================================================')
//d
let ft;
ft = 50 * 0.3048
console.log('50 ft equivalem a', ft, 'm')
console.log('=====================================================')
//e
let gal;
gal = 103.56 * 3.7854
console.log('103.56 gal equivalem a', gal, 'l')
console.log('=====================================================')
//f
let xic;
xic = 450 * 0.24
console.log('450 xic equivalem a', xic, 'l')
console.log('=====================================================')
//g
xic;
xic = prompt('Insira o valor em xícaras')
console.log(xic, 'xic equivalem a')
xic = xic * 0.24
console.log(xic, 'l.')