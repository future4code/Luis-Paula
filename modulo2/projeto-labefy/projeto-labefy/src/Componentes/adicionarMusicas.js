import axios from 'axios';
import React from 'react';

export default class AdicionarPlaylist extends React.Component {
  state = {
    nome: '',
    artista: '',
    link: '',
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeArtista = (e) => {
    this.setState({ artista: e.target.value });
  };

  onChangeLink = (e) => {
    this.setState({ link: e.target.value });
  };

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
    return (
      <div>
        <button onClick={this.props.Playlists}>
          Ir para tela de Playlists
        </button>
        <div>
          Nome da Música:
          <input
            type="text"
            placeholder="Nome da música"
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
          Link da Música:
          <input
            type="url"
            placeholder="Link da música"
            value={this.state.link}
            onChange={this.OnchangeLink}
          />
          <button onClick="">Adicionar</button>
        </div>
      </div>
    );
  }
}
