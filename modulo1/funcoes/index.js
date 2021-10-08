// Exercícios de interpretação de código
//1
//a) A função vai retornar 10 e 50
//b) não vai aparecer nada no console, apesar da função rodar normalmente.

//2
//a) Essa função pega o texto digitado pelo usuário e verfica se tem a palavra cenoura no texto.
// b) Todas vão aparecer apenas true.

//Exercícios de escrita de código
//1
//a)
function imprimirMensagem(){
    console.log('Eu sou o Luis, tenho 24 anos, moro em Brasília e sou estudante')
}
imprimirMensagem()
console.log('========================================================')
//b)
function imprimirMensagem2(nome, idade, endereco, profissao){
    nome = prompt('Qual o seu nome?')
    idade = prompt('Qual a sua idade?')
    endereco = prompt('Qual o seu endereço?')
    profissao = prompt('Qual a sua profissao?')
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}
imprimirMensagem2()
console.log('========================================================')

//2
//a)
function somarNumeros(a, b){
    const soma = a + b
    return soma
}
const adicao = somarNumeros(2, 3)
console.log(adicao)
console.log('========================================================')
//b)
function igualarNumeros(numero1, numero2){
    const maiorOuIgual = numero1 >= numero2
    return maiorOuIgual
}
const resultado = igualarNumeros(5, 8)
console.log(resultado)
console.log('========================================================')
//c)
function verPar(n){
    const parounao = n%2 ===0
    return parounao
}
const numero = verPar(124)
console.log(numero)
console.log('========================================================')
//d)
function receberString(string){
   console.log('Tamanho da mensagem:', string.length)
   console.log('Mensagem em maiúsculo:', string)
}
receberString('Olá, tudo bem?')
console.log('========================================================')

//3
const x = Number(prompt('Por favor, digite um número'))
const y = Number(prompt('Por favor, digite outro número'))
function somar(x, y){
    soma = x + y
    return soma
}
function subtrair(x, y){
    subtracao = x - y
    return subtracao
}
function multiplicar(x, y){
    multiplicacao = x * y
    return multiplicacao 
}
function dividir(x, y){
    divisao = x/y
    return divisao
}
const resultadoSoma = somar(x,y)
const resultadoSubtracao = subtrair(x,y)
const resultadoMultiplicacao = multiplicar(x,y)
const resultadoDivisao = dividir(x,y)
console.log(`Numeros inserido: ${x} e ${y}
Soma: ${resultadoSoma}
Diferença: ${resultadoSubtracao}
Multiplicação ${resultadoMultiplicacao}
Divisão: ${resultadoDivisao}`)
console.log('========================================================')


//Desafios
//1
//a)
const imprimirParametro = (n)=>{
    impressao = n
    return impressao
}
const retornoParametro = imprimirParametro('Olá')
console.log(retornoParametro)
console.log('========================================================')
//b)
const receberDoisParametros = (a,b) =>{
    const soma = a + b
    console.log(soma)
}
receberDoisParametros(12,89)
console.log('========================================================')

//2
function calcularHipotenusa(a,b){
    const hipotenusa = ((a * a) + (b * b))**(1/2)
    return hipotenusa
}
const calculoHipotenusa = calcularHipotenusa(12,25)
console.log(` O resultado da hipotenusa é ${calculoHipotenusa}`)