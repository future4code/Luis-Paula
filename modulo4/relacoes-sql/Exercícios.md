## 1

# a)

A chave estrangeira é a referência de uma chave primária de outra tabela, onde é igualada para retornar os dados dessa tabela.

# b)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"004",
"Ruim!",
1,
"004"
);

# c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-luis-gustavo-rodrigues-de-paula`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Diz que não posso criar ou atualizar a tabela filha onde não reconhece a chave estrangeira.

# d)

ALTER TABLE Movie DROP COLUMN rating;

# e)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-luis-gustavo-rodrigues-de-paula`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não pode deletar ou atualizar uma linha de uma tabela pai onde interfere diretamente na tabela filho.

## 2

# a)

Relaciona atores da tabela de atores aos filmes da tabela de filmes.

# b)

INSERT INTO MovieCast VALUES
('001','1'), ('002','1'), ('003','2'),
('004','2'), ('001','3'), ('002','4'),
('003','4'), ('004','5');

# c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-luis-gustavo-rodrigues-de-paula`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não adiciona ou atualiza porque as chaves não batem.

# d)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-luis-gustavo-rodrigues-de-paula`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível deletar porque a chave estrangeira depende dele.

## 3

# a)

O operador ON é um condicional, sem ele a tabela vai ficar fora de ordem e vai multiplicar os itens, ele age como um filtro que busca valores correspondentes a condição passada.

# b)

SELECT Movie.id, Movie.title, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
