import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './foto/foto.jpeg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="foto"
          nome="Luis Gustavo"
          descricao="Oi, eu sou o Luis. Sou aluno da Labenu. Adoro cozinhar e jogar jogos 4X e rpgs."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          email="Email: luisgustavordp1@gmail.com"
          endereço="Endereço: Fim da rua"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudando para ser um dos melhores devs do mercado de trabalho!"
        />

        <CardGrande
          imagem="https://img.freepik.com/vetores-gratis/logotipo-do-restaurante-retro_23-2148474404.jpg?size=338&ext=jpg"
          nome="Restaurantes"
          descricao="Chefiava cozinha e treinava a equipe."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
