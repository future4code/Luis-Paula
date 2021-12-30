import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Buttons, Container, MainContainer } from './StyledAdminHome';

function AdminHomePage() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';

  const [idTrips, setIdTrips] = useState([]);
  const id = idTrips.id;

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
    history.push(`/admin/trips/:id`);
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
      .get(`${baseUrl}/${name}/trip/:id`, {
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

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${baseUrl}/${name}/trips`)
      .then((res) => {
        console.log(res.data);
        setIdTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <Buttons>
        <Button variant="contained" onClick={GoToHome}>
          Página Inicial
        </Button>
        <Button variant="contained" onClick={GoToCreate}>
          Nova Viagem
        </Button>
      </Buttons>
      <Container>
        {idTrips.map((id) => {
          return (
            <Button variant="contained">
              <p onClick={GoToDetalhes} key={id.id}>
                {id.name}
              </p>
            </Button>
          );
        })}
      </Container>
    </MainContainer>
  );
}

export default AdminHomePage;
