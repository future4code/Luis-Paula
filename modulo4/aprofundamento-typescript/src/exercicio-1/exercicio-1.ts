//1
//a)
// const minhaString:string = 1
//Ao adicionar um número aparece o erro: O tipo number não pode ser atribuído ao tipo string

//b)
const meuNumero: number | string = "1"
//Utilizando o comparador | podemos fazer com que aceite qualquer tipo

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresDoArcoIris
    
}

enum CoresDoArcoIris {
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

const objeto1:Pessoa = {
    nome: 'Luis',
    idade: 25,
    corFavorita: CoresDoArcoIris.AZUL
}

const objeto2:Pessoa = {
    nome: 'Gabi',
    idade: 26,
    corFavorita: CoresDoArcoIris.ANIL
}
const objeto3:Pessoa = {
    nome: 'Maria',
    idade: 27,
    corFavorita: CoresDoArcoIris.VERMELHO
}