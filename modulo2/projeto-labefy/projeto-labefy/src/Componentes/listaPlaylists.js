import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import AdicionarPlaylist from './adicionarMusicas';

const MainContainer = styled.div`
  border: 1px solid #00d95a;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #191414;
`;

const ContainerHeader = styled.div`
  border: 1px solid #00d95a;
  background-color: #191414;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #00d95a;
    text-align: left;
    font-size: xx-large;
    display: flex;
  }
`;

const ContainerPlaylists = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerMusicas = styled.div`
  border: 1px solid #00d95a;
  color: white;
  padding: 150px;
  font-size: xx-large;
`;

const Texto = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding-right: 150px;
  padding-top: 150px;
  font-size: xx-large;
`;
export default class ListaPlaylists extends React.Component {
  state = {
    lista: [],
    nomePlaylist: '',
    musicas: [],
  };
  componentDidMount() {
    this.listaDePlaylists();
    // this.musicasPlaylist();
  }

  onChangeNomePlaylist = (e) => {
    this.setState({ nomePlaylist: e.target.value });
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

  getIdPlaylists = console.log(this.state.musicas.id);

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
  // musicasPlaylist = () => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`;
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: 'luis-paula-carver',
  //       },
  //     })
  //     .then((res) => {
  //       this.listaDePlaylists();
  //       console.log('playlist', res);
  //       this.setState({ musicas: res.data });
  //     })
  //     .catch((err) => {
  //       alert('Ops! Detectamos um erro, tente novamente!');
  //     });
  // };

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

    const mostrarPlaylists = this.state.lista.map((generos) => {
      return (
        <p>
          <button
            key={generos.id}
            onClick={() => {
              return console.log(this.state.musicas.id);
            }}
          >
            {generos.name}
            <button
              onClick={() => {
                this.deletarPlaylist(generos.id);
              }}
            >
              X
            </button>
          </button>
        </p>
      );
    });
    <AdicionarPlaylist PropsParaLista={this.listaDePlaylists} />;
    return (
      <div>
        <ContainerHeader>
          <p>SpotiFalso</p>
          <button onClick={this.props.Cadastro}>
            Adicionar musicas à playlist
          </button>
          <input
            type="text"
            value={this.state.nomePlaylist}
            onChange={this.onChangeNomePlaylist}
            placeholder="Nome da nova playlist"
          />
          <button onClick={this.novaPlaylist}>Nova Playlist</button>
        </ContainerHeader>

        <MainContainer>
          <ContainerPlaylists>
            <div>{mostrarPlaylists}</div>
          </ContainerPlaylists>
          <ContainerMusicas>Finja que existem músicas aqui!</ContainerMusicas>
          <Texto>
            <p>Spotifalso!</p>
            <p>Tão falso que nada funciona</p>
          </Texto>
        </MainContainer>
      </div>
    );
  }
}
