## 1

# a)

Remove a coluna salário da tabela.

# b)

Muda a coluna gender por sex aceitando strings com um máximo de 6 caracteres

# c)

Muda a coluna gender para aceitar strings com um máximo de 255 caracteres

# d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## 2

# a)

UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";

# b)

UPDATE Actor SET name = 'JULIANA PAES' WHERE id = '005';
UPDATE Actor SET name = 'Juliana Paes' WHERE id= '005';

# c)

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "003";

# d)

O MySQL volta uma mensagem de sucesso, porém não altera nada e quando busco na tabela não aparece nada.

## 3

# a)

DELETE FROM Actor WHERE name = 'Fernanda Montenegro';

# b)

DELETE FROM Actor WHERE salary > 1000000 AND gender = 'male';

## 4

# a)

SELECT MAX(salary) FROM Actor;

# b)

SELECT MIN(salary) FROM Actor WHERE gender = 'female';

# c)

SELECT COUNT(*) FROM Actor WHERE gender = 'female';

# d)

SELECT SUM(salary) FROM Actor;

## 5

# a)

Essa query agrupa os atores por gênero.

# b)

SELECT id, name FROM Actor ORDER BY name ASC;

# c)

SELECT * FROM Actor ORDER BY salary;

# d)

SELECT * FROM Actor ORDER BY salary LIMIT 3;

# e)

SELECT AVG(salary) FROM Actor GROUP BY gender ORDER BY gender;

## 6

# a)

ALTER TABLE Filmes ADD playing_limit_date DATE;

# b)

ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

# c)

UPDATE Filmes SET playing_limit_date = '2022-02-22' WHERE id='001';
UPDATE Filmes SET playing_limit_date = '2022-01-22' WHERE id='002';

# d)

DELETE FROM Filmes WHERE id = '003';
UPDATE Filmes SET sinopse = 'Mudei a sinopse' WHERE id='003';

14:10:34 UPDATE Filmes SET sinopse = 'Mudei a sinopse' WHERE id='003' 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0 0.000 sec

Deu mensagem de certo, porém não aparece mais na lista pois ela foi deletada, ao que parece o SQL guarda a id porém não reconhece que foi deletado.