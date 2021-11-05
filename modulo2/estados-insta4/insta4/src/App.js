import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AdicionarNovoPost = styled.div`
  margin: 50px 10px;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    listaPessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Gabi',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },
      {
        nomeUsuario: 'Luis',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],
    valorInputNome: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',
  };

  adicionaPost = () => {
    const post = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPost = { ...this.state.listaPessoas, post };
    this.setState({ listaPessoas: novoPost });
    this.setState({ listaPessoas: '' });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    return (
      <MainContainer>
        <AdicionarNovoPost>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={'Nome'}
          />

          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={'Foto do usuário'}
          />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={'Foto do post'}
          />
          <button onClick={this.adicionaPost}>Adicionar Novo Post</button>
        </AdicionarNovoPost>
        {this.state.listaPessoas.map((pessoas) => {
          return (
            <Post
              nomeUsuario={pessoas.nomeUsuario}
              fotoUsuario={pessoas.fotoUsuario}
              fotoPost={pessoas.fotoPost}
            />
          );
        })}
      </MainContainer>
    );
  }
}

export default App;
