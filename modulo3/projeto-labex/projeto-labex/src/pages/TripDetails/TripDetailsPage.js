import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

function Details() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';
  const history = useHistory();
  const params = useParams();
  const [trips, setTrips] = useState([]);

  const goBack = () => {
    history.push('/admin/trips/list');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      console.log('não está logado');
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${baseUrl}/${name}/trips`)
      .then((res) => {
        console.log(res.data);
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const names = trips.map((trip) => {
    return trip.name;
  });
  console.log('params', params);
  return (
    <div>
      <p>Detalhes da Viagem</p>
      <p>{names}</p>
      <Button variant="contained" onClick={goBack}>
        Voltar
      </Button>
    </div>
  );
}

export default Details;
