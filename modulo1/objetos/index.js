// Exercícios de interpretação de código
//1 
// Matheus Nachtergaele, Virginia Cavendish e "Globo" "14h"

//2
//a)
// Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD
//b)
// Os três prontos (...) servem para copiar um objeto.

//3
//a)
// Vai ser impresso false e undefined.
//b)
// Acontece isso pois a função retorna apenas o valor da propriedade do objeto,
//sendo assim, o primeiro retorna falso pois "backender" está como falso e
//no segundo caso retorna undefined pois não há um valor para altura.


//Exercícios de escrita de código
//1
//a)
const pessoa = {
    nome: 'Luis Gustavo',
    apelidos: ['Gu', 'Lu', 'Gugu']
}

function saidaPessoa(pessoa) {
    const fraseDeSaida = `Olá, sou o ${pessoa.nome} mas pode me chamar de:
    ${pessoa.apelidos[0]},
    ${pessoa.apelidos[1]}, ou
    ${pessoa.apelidos[2]}`

    return fraseDeSaida
}

console.log(saidaPessoa(pessoa))

//b)
const novosApelidos = {
    ...pessoa,
    apelidos: ['Gust', 'Guto', 'Cabeça'],
}

console.log(saidaPessoa(novosApelidos))

//2
const pessoa1 = {
    nome: 'Augusto',
    idade: 19,
    profissao: 'Estudante'
}

const pessoa2 = {
    nome: 'João',
    idade: 46,
    profissao: 'Cozinheiro'
}

function objetos(pessoa){
    const saida = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return saida
}
objetos(pessoa1)
objetos(pessoa2)

//3
//a)
const carrinho = []
//b)
const fruta1 = {
    nome: 'Banana',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Uva',
    disponibilidade: true
}
const fruta3 = {
    nome: 'Mexerica',
    disponibilidade: true
}
//c)
function feira(){
    const frutasNoCarrinho = carrinho.push(fruta1, fruta2, fruta3)

    return frutasNoCarrinho
}

feira()

console.log(carrinho)


// Desafios
//1
function desafio1(){
    const nome = prompt('Qual o seu nome?')
    const idade = prompt('Qual a sua idade?')
    const profissao = prompt('Qual a sua profissão?')

    const objeto = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    
    return objeto
}
console.log(desafio1())
console.log(typeof desafio1())

//2
const filmeA = {
    nome: 'Palhaços Assasinos do Espaço Sideral',
    ano: 1988
}
const filmeB = {
    nome: 'Halloween',
    ano: 1978
}

function comparacaoDeFilmes(){
    comparacao1 = filmeA.ano < filmeB
    comparacao2 = filmeA.nome.length > filmeB.nome.length

    return `O primeiro filme é mais velho que o segundo? ${comparacao1}.
    ====================================================================
    O primeiro filme tem o nome mais longo que o segundo? ${comparacao2}`
}
console.log(comparacaoDeFilmes())

//3
function estoque(){
    const estoqueFrutas = {
        ...fruta2,
        disponibilidade: false
    }

    return estoqueFrutas
}

console.log(estoque())