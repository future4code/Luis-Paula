import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  display: grid;
  text-align: center;
  margin: 150px 400px 15px;
  box-shadow: 3px 5px 10px black;

  button:hover {
    color: blue;
  }
`;

const Texto = styled.input`
  display: flex;
  padding: 15px;
  margin: 0 50px 15px;
`;

const ContainerLista = styled.div`
  border: 1px solid black;
  margin: 50px 400px;
`;

const Itens = styled.li`
  border: 1px solid black;
  margin: 5px;
`;

class App extends React.Component {
  state = {
    lista: [],
    valorNome: '',
    valorEmail: '',
    mudarPagina: 1,
    // deletar: '',
  };

  componentDidMount() {
    this.request();
  }

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value });
  };
  // onChangeDeletar = (event) => {
  //   this.setState({ deletar: event.target.value });
  // };
  // onChangeDeletarUsuario = (event) => {
  //   this.setState({
  //     lista: this.state.lista.filter((nome) => {
  //       return nome !== event.target.lista;
  //     }),
  //   });
  // };

  request = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'luis-paula-carver',
          },
        }
      )
      .then((response) => {
        this.setState({ lista: response.data });
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  usuario = () => {
    const body = {
      name: this.state.valorNome,
      email: this.state.valorEmail,
    };
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'luis-paula-carver',
          },
        }
      )
      .then((response) => {
        this.request();
        this.setState({ valorNome: '', valorEmail: '' });
        alert('Sucesso!');
      })
      .catch((error) => {
        alert(
          'Ops vimos que aconteceu um erro! Coloque o nome e o email corretamente! Não esqueça do @ e do .com!'
        );
        this.setState({ valorNome: '', valorEmail: '' });
      });
  };

  // deletarUsuario = () => {
  //   axios
  //     .delete(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users${this.state.lista.name}`,
  //       {
  //         headers: {
  //           Authorization: 'luis-paula-carver',
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       this.request();
  //       this.setState({ deletar: '' });
  //       alert('Sucesso!');
  //     })
  //     .catch((error) => {
  //       alert('Nome incorreto');
  //     });
  // };

  render() {
    const usuarioNovo = this.state.lista.map((nomes) => {
      return <Itens key={nomes.id}>{nomes.name}</Itens>;
    });

    const mudarDePagina = () => {
      if (this.state.mudarPagina === 1) {
        this.setState({ mudarPagina: 2 });
      } else {
        this.setState({ mudarPagina: 1 });
      }
    };

    return (
      <div className="App">
        <button onClick={mudarDePagina}>Mudar de Página</button>
        {this.state.mudarPagina === 1 ? (
          <ContainerPrincipal>
            Nome:
            <Texto
              type="text"
              name="Nome"
              placeholder="Digite seu nome"
              value={this.state.valorNome.toLowerCase()}
              onChange={this.onChangeNome}
            />
            Email:
            <Texto
              type="email"
              name="Email"
              placeholder="Digite seu email"
              value={this.state.valorEmail.toLowerCase()}
              onChange={this.onChangeEmail}
            />
            <button onClick={this.usuario}>Enviar</button>
          </ContainerPrincipal>
        ) : (
          <ContainerLista>
            <ul>{usuarioNovo}</ul>
            {/* <input
              type="text"
              name="Deletar"
              placeholder="Nome"
              value={this.state.deletar.toLowerCase()}
              onChange={this.onChangeDeletar}
            />
            <button onClick={this.onChangeDeletarUsuario}>Deletar Nome</button> */}
          </ContainerLista>
        )}
      </div>
    );
  }
}

export default App;
