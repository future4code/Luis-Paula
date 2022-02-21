### Exercícios

### 1 - a)

O melhor é usar strings, até porque a lógica do sistema do uuid faz com que sejam números e letras juntos além do " - " que separa as seções do id. Então não teria como ser só números.

### 2 - a)

O código está usando os dados passados pelo arquivo dotenv e inserindo id, email e password na tabela User, sendo tudo que está sendo inserido uam string.

### b)

CREATE TABLE IF NOT EXISTS User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

### 3 - a)

O "as a String" garante que algo retorne como uma string. Precisamos usar ela para garantir que a token retorne como uma string.

### 7 - a)

O "as any" garante que retorne como qualquer coisa e ela será válida. Precisamos retornar como as any ali pois ele pode vir como qualquer coisa.
