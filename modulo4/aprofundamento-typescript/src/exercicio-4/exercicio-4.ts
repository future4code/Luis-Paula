type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b1) no package.json cria dentro do script a função "start": "tsc && node index.js"

//b2) se estiver dentro de uma pasta src tem que especificar o caminho no tsconfig.json onde vai buscar o arquivo .ts

//c) O comando tsc sem passar nenhum comando transpila todos os arquivos .ts que encontrar.