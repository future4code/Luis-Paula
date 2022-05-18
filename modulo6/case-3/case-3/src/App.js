import React from 'react';
import { Router } from './Routes/Router';
import GlobalFonts from './Fonts/Fonts';
function App() {
  return (
    <div>
      <GlobalFonts />
      <Router />
    </div>
  );
}

export default App;
