import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

function AdminHomePage() {
  const history = useHistory();
  const GoToCreate = () => {
    history.push('/admin/trips/create');
  };
  const GoToHome = () => {
    history.push('/');
  };
  const GoToLogin = () => {
    history.push('/login');
  };
  const GoToDetalhes = () => {
    history.push('/admin/trips/:id');
  };

  return (
    <div>
      <p>Página Inicial Admin</p>
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToCreate}>
        Viagens
      </Button>
      <Button variant="contained" onClick={GoToLogin}>
        Login
      </Button>
      <Button variant="contained" onClick={GoToDetalhes}>
        Detalhes
      </Button>
    </div>
  );
}

export default AdminHomePage;
