import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #191414;
  color: white;
  box-shadow: 0px 5px 10px #00d95a;
  height: 100vh;
`;

export default class AdicionarPlaylist extends React.Component {
  state = {
    musicas: [],
    nome: '',
    artista: '',
    link: '',
  };

  componentDidMount() {
    // this.musicasPlaylist();
  }

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeArtista = (e) => {
    this.setState({ artista: e.target.value });
  };

  onChangeLink = (e) => {
    this.setState({ link: e.target.value });
  };

  // musicasPlaylist = (playlistId) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: 'luis-paula-carver',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       // this.setState({ musicas: res.data });
  //     })
  //     .catch((err) => {
  //       alert('Ops! Detectamos um erro, tente novamente!');
  //     });
  // };

  adicionarMusica = async (playlistId) => {
    const body = {};
    try {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/id`;
      const resposta = await axios.post(url, body, {
        headers: {
          Authorization: 'luis-paula-carver',
        },
      });
      console.log(resposta.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  render() {
    // const mostrarMusicas = this.state.musicas.map((item) => {
    //   return (
    //     <div key={item.id}>
    //       <p>{item.name}</p>
    //       <p>{item.artist}</p>
    //       <p>{item.url}</p>
    //     </div>
    //   );
    // });
    return (
      <MainContainer>
        <button onClick={this.props.Playlists}>
          Ir para tela de Playlists
        </button>
        <MainContainer>
          Nome da M??sica:
          <input
            type="text"
            placeholder="Nome da m??sica"
            value={this.state.nome}
            onChange={this.OnchangeNome}
          />
          Nome do(s) artista(s):
          <input
            type="text"
            placeholder="Nome do(s) artista(s)"
            value={this.state.artista}
            onChange={this.OnchangeArtista}
          />
          Link da M??sica:
          <input
            type="url"
            placeholder="Link da m??sica"
            value={this.state.link}
            onChange={this.OnchangeLink}
          />
          <button onClick="">Adicionar</button>
        </MainContainer>
        <div></div>
      </MainContainer>
    );
  }
}
