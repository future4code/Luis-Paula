import React, { useState } from 'react';
import Home from './Components/Home';
import Match from './Components/Match';

function App() {
  const [pagina, setPagina] = useState(true);

  const Paginas = () => {
    switch (pagina) {
      case true:
        return <Home irParaMatch={IrParaMatch} />;
      case false:
        return <Match irParaHome={IrParaHome} />;
      default:
        return (
          <div>
            <h1>Erro! Página não encontrada! :(</h1>
            <h2>Volte para a página inicial clicando no botão abaixo!</h2>
            <button onClick={IrParaHome}>Home</button>
          </div>
        );
    }
  };

  const IrParaHome = () => {
    setPagina(true);
  };

  const IrParaMatch = () => {
    setPagina(false);
  };

  return <div>{Paginas()}</div>;
}

export default App;
