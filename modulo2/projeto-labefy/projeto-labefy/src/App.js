import React from 'react';
import AdicionarPlaylist from './Componentes/adicionarMusicas';
import ListaPlaylists from './Componentes/listaPlaylists';

export default class App extends React.Component {
  state = {
    tela: 'adicionar',
  };

  escolherTela = () => {
    switch (this.state.tela) {
      case 'adicionar':
        return <AdicionarPlaylist Playlists={this.telaPlaylists} />;
      case 'listas':
        return <ListaPlaylists Cadastro={this.telaCadastro} />;
      default:
        return <div>Erro! Página não encontrada.</div>;
    }
  };

  telaCadastro = () => {
    this.setState({ tela: 'adicionar' });
  };

  telaPlaylists = () => {
    this.setState({ tela: 'listas' });
  };

  render() {
    return <div>{this.escolherTela()}</div>;
  }
}
