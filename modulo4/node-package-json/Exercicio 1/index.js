// Exercício 1
//a)
// Utilizamos a propriedade process.argv

//b)
const inputName = process.argv[2]
const inputAge = Number(process.argv[3])

const result = `Olá, ${inputName}! Você tem ${inputAge} anos.`

console.log(result)

//C
const resultAdd = `Olá, ${inputName}! Você tem ${inputAge} anos. Em sete anos você terá ${inputAge + 7}`
console.log(resultAdd)