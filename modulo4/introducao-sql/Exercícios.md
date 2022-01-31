## 1

# a)

VARCHAR significa o número máximo de caracteres que podem ter no item, PRIMARY KEY é identificador de cada item, NOT NULL é indicando que o campo não pode estar vazio e DATE corresponde a data.

# b)

SHOW databases mostra todos os bancos de dados que tenho no meu usuário nesse servidor, Já SHOW tables mostra as tabalas que tenho no banco de dados que estou usando.

# c)

DESCRIBE Actor vai descrever a tabela actor e mostrar o que deve vir em cada coluna.

## 2

# a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glóra Pires",
1200000,
"1963-07-23",
"female"
);

# b)

Entrada duplicada para chave primária 002 em Actor. Isso significa que não pode ter dois itens com a mesma chave primária.

# c)

A quantidade de coluna não combina com o valor inserido na coluna 1. Isso mostra que faltam dados para passar antes dos valores, no caso faltam, birth_date e gender.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

# d)

O campo 'nome' não tem um valor padrão. Isso mostra que falta declarar o nome e passar como valor.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
400000,
"Ator 4"
"1949-04-18",
"male"
);

# e)

Valor incorreto de data. Diz que o valor passado está incorreto, pq está recebendo um número e não uma string como deveria receber.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

## 3

# a)

SELECT id, name from Actor WHERE gender = "female"

# b)

SELECT salary from Actor WHERE name = "Tony Ramos"

# c)

SELECT * from Actor WHERE gender = "invalid";
Retorna uma tabela vazia com tudo escrito null, pois nenhum gênero foi dado como inválido

# d)

SELECT ID, name, salary from Actor WHERE salary <= 500000;

# e)

Coluna 'nome' é desconhecida na lista. Ele retorna esse erro pq na tabela não temos o item nome, mas sim o item name.
SELECT id, name from Actor WHERE id = "002"

## 4

# a)

a query vai retornar atores que tem o nome que começa com a letra A ou J, e que tenham o salário maior que 300.000,00.

# b)

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

# c)

SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";

# d)

SELECT * FROM Actor
WHERE (name like "%G%" OR name like "%g%" OR name like "%A%" OR name like "%a%")
AND salary BETWEEN 350000 AND 900000;

## 5

# a)

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
	sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

Essa query assim como a query Actors criou uma tabela, onde devem ser adicionados id, nome, sinopse, data de lançamento e avaliação do filme que deve ser botado, sendo a availiação limitada à 2 caracteres pois a nota só vai de 0-10.

## 6

# a)

SELECT id, nome, avaliacao FROM Filmes WHERE id = '001';

# b)

SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";

# c)

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

## 7

# a)

SELECT * FROM Filmes WHERE nome LIKE "%vida%";

# b)

SELECT * FROM Filmes 
WHERE nome LIKE "%vida%" or sinopse LIKE "%vida%";

# c)

SELECT * FROM Filmes WHERE data_de_lancamento < '2022-01-31';

# d)

SELECT * FROM Filmes
WHERE (nome LIKE "%vida%" or sinopse LIKE "%vida%") AND avaliacao >= 7 AND data_de_lancamento < '2022-01-31';