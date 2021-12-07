import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

function HomePage() {
  const history = useHistory();
  const GoToList = () => {
    history.push('/trips/list');
  };
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  return (
    <div>
      <h1>Página Inicial</h1>
      <Button variant="contained" onClick={GoToList}>
        Viagens
      </Button>
      <Button variant="contained" onClick={GoToAdmin}>
        Admin
      </Button>
    </div>
  );
}

export default HomePage;
