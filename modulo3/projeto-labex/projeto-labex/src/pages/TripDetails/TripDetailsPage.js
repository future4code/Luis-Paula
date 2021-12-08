import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import axios from 'axios';

function Details() {
  const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';
  const name = 'luis';
  const [idTrips, setIdTrips] = useState([]);
  const [trips, setTrips] = useState([]);

  const history = useHistory();
  const GoToAdmin = () => {
    history.push('/admin/trips/list');
  };
  const GoToHome = () => {
    history.push('/');
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
        setIdTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [idTrips]);

  const onChangeClick = () => {
    history.push(`/admin/trips/list/${trips}`);
  };

  const getData = () => {
    const loneId = idTrips.map((id) => {
      return id.id;
    });
    const token = localStorage.getItem('token');
    axios
      .get(`${baseUrl}/${name}/trip/${loneId}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTrips(res.data.id);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <p>Detalhes da Viagem</p>
      {idTrips.map((id) => {
        return (
          <p>
            <Button
              onClick={() => {
                onChangeClick();
              }}
            >
              {id.name}
            </Button>
          </p>
        );
      })}
      <Button variant="contained" onClick={GoToHome}>
        Home
      </Button>
      <Button variant="contained" onClick={GoToAdmin}>
        Admin
      </Button>
    </div>
  );
}

export default Details;
