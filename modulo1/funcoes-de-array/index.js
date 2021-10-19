// Exercícios de interpretação de código

// 1
//Vai ser impresso no console cada item com o nome e apelido, juntamente com seu índice na array e a array em cada item.

// 2
// Vai ser impresso no console apenas os nomes da array.

// 3.
// Vai ser impresso no console todos os apelidos que não forem Chijo.

//Exercícios de escrita de código

//1
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
//a)

const nomeDosDogs = (nomes) => {
  return nomes.nome;
};
const arrayDosNomes = pets.map(nomeDosDogs);

console.log(arrayDosNomes);

//b)
const racaSalsicha = (racas) => {
  if (racas.raca === "Salsicha") {
    return racas.nome;
  }
};
const nomeDosSalsichas = pets.filter(racaSalsicha).map(racaSalsicha);

console.log(nomeDosSalsichas);

//c)
const racaPoodle = (racas) => {
  if (racas.raca === "Poodle") {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${racas.nome}!`;
  }
};
const nomeDosPoodles = pets.filter(racaPoodle).map(racaPoodle);

console.log(nomeDosPoodles);

//2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];
//a)
const retornarNomeDosItens = (nomes) => {
  return nomes.nome;
};
const nomeDosItens = produtos.map(retornarNomeDosItens);
console.log(nomeDosItens);

//b)
const aplicarDescontos = (precos) => {
  const nomeItens = precos.nome;
  precos = precos.preco - precos.preco * (5 / 100);
  return { nome: nomeItens, preço: precos };
};
const precoENomeDosItens = produtos.map(aplicarDescontos);

console.log(precoENomeDosItens);

//c)
const procurarBebidas = (bebidas) => {
  if (bebidas.categoria === "Bebidas") {
    return bebidas.categoria;
  }
};
const bebidas = produtos.filter(procurarBebidas);

console.log(bebidas);

//d)
const nomeYpe = (busca) => {
  if (busca.nome.includes("Ypê")) {
    return busca;
  }
};
const ype = produtos.filter(nomeYpe);

console.log(ype);

//e)
const arrayYpe = (busca) => {
  if (busca.nome.includes("Ypê")) {
    return busca;
  }
};
const novoYpe = produtos.filter(arrayYpe);

const retornarNomeDosItensNovamente = (nomes) => {
  return `Compre ${nomes.nome} por ${nomes.preco}`;
};
const nomeDosItensNovamente = novoYpe.map(retornarNomeDosItensNovamente);

console.log(nomeDosItensNovamente);

// Desafios
//1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a)
const listarPokemon = (nomes) => {
  return nomes.nome;
};
const novaLista = pokemons.map(listarPokemon).sort();
console.log(novaLista);
// b)
const tiparPokemon = (tipos) => {
  return tipos.tipo;
};
const tipos = pokemons.map(tiparPokemon);
console.log([tipos[0], tipos[2], tipos[4]]);
