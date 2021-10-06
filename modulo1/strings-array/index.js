//Exercícios de interpretação de código
//1
// let array
// console.log('a. ', array)
// Aparece a. undefined. Pois a array não foi definida

// array = null
// console.log('b. ', array)
//Aparece b. null. Pois o valor da array é null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//Aparece c. 11

// let i = 0
// console.log('d. ', array[i])
//Aparece d. 3. Pois a posição inicial é 3.

// array[i+1] = 19
// console.log('e. ', array)
//Aparece e. e irá substituir o segundo numero por 19, no caso o 4 

// const valor = array[i+6]
// console.log('f. ', valor)
//Aparece f. 9. Pois vai substituir o valor inicial do 3 para 3+6, que é 9.

//2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Qual será o valor impresso no console se 
// a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// A entrada será:
// "SUBI NUM ÔNIBUS EM MIRROCOS" 29


//Exercícios de escrita de código
//1
const nomeDoUsuario = prompt('Qual o seu nome?')
const emailDoUsuario = prompt('Qual o seu email?')
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2
const comidas = ['Batata Frita', 'Hamburguer', 'Pizza', 'Bife', 'Cachorro-quente']
console.log(comidas)
console.log(`Essas são minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`
)
const pergunta = prompt('Qual a sua comida preferida?')
comidas.splice(1, 1,pergunta)
console.log(comidas)

// 3
let listaDeTarefas
const array0 = prompt('Qual a sua primeira tarefa de hoje?')
const array1 = prompt('Qual a sua segunda tarefa de hoje?')
const array2 = prompt('Qual a sua terceira tarefa de hoje?')
listaDeTarefas = [array0, array1, array2]
console.log(listaDeTarefas)
const indice = prompt('Quantas tarefas, em ordem, você já realizou?')
listaDeConclusao = listaDeTarefas.splice(indice)
console.log(`Faltam ainda ${listaDeConclusao.length} tarefas para serem
realizadas, sendo ela(s): ${listaDeConclusao}`)

// Desafios
//1
const frase = prompt('Digite uma frase, separando cada palavra por um espaço simples').trim()
console.log(frase)
const array = frase.split(' ')
console.log(array)

//2
const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(listaFrutas)
let posicao = listaFrutas.indexOf('Abacaxi')
console.log(`A posição de Abacaxi na array é:
${posicao}.
E o tamanho da array é:
${listaFrutas.length}.`)