import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import axios from 'axios';

function AdminHomePage() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      console.log('não está logado');
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${baseUrl}/${name}/trip/${'LyvCb5jxopjfn6HBuh5L'}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
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
