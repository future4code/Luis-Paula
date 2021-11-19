import axios from 'axios';
import React from 'react';

export default class ListaPlaylists extends React.Component {
  state = {
    lista: [],
    nomePlaylist: '',
    aberto: false,
    musicas: [],
  };
  componentDidMount() {
    this.listaDePlaylists();
  }

  onChangeNomePlaylist = (e) => {
    this.setState({ nomePlaylist: e.target.value });
  };

  handleBotaoAbrir = () => {
    this.setState((abrir) => {
      return {
        aberto: !abrir.aberto,
      };
    });
  };

  listaDePlaylists = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
    axios
      .get(url, {
        headers: {
          Authorization: 'luis-paula-carver',
        },
      })
      .then((res) => {
        this.setState({ lista: res.data.result.list });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  novaPlaylist = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
    const body = {
      name: this.state.nomePlaylist,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: 'luis-paula-carver',
        },
      })
      .then((res) => {
        this.listaDePlaylists();
        this.setState({ nomePlaylist: '' });
        alert('Playlist adicionada com sucesso!');
      })
      .catch((err) => {
        alert(
          'Erro! Tente adicionar uma playlist que já não esteja inclusa na lista'
        );
        this.setState({ nomePlaylist: '' });
      });
  };

  deletarPlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`;
    axios
      .delete(url, {
        headers: {
          Authorization: 'luis-paula-carver',
        },
      })
      .then((res) => {
        this.listaDePlaylists();
        alert('Playlist deletada com sucesso!');
      })
      .catch((err) => {
        alert('Ops! Detectamos um erro, tente novamente!');
      });
  };

  musicasPlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;
    axios
      .get(url, {
        headers: {
          Authorization: 'luis-paula-carver',
        },
      })
      .then((res) => {
        this.listaDePlaylists();
        this.setState({ musicas: res.data });
      })
      .catch((err) => {
        alert('Ops! Detectamos um erro, tente novamente!');
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.Cadastro}>
          Adicionar musicas à playlist
        </button>
        <input
          type="text"
          onChange={this.onChangeNomePlaylist}
          placeholder="Nome da nova playlist"
        />
        <button onClick={this.novaPlaylist}>Nova Playlist</button>
        <div>
          <button onClick={this.handleBotaoAbrir}>Abra as Playlists</button>
          {this.state.lista.map((generos) => {
            return (
              <div key={generos.id}>
                {generos.name}
                {this.state.aberto && (
                  <div class="dropdown">
                    <ul>
                      {this.state.musicas.map((musica) => {
                        return <li key={musica.id}>{musica.name}</li>;
                      })}
                    </ul>
                  </div>
                )}
                <button
                  onClick={() => {
                    this.deletarPlaylist(generos.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
