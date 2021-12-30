import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Buttons, Container, ContainerList, MainContainer } from './StyledList';

const name = 'luis';
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX';

function List() {
  const history = useHistory();
  const GoToHome = () => {
    history.push('/');
  };
  const GoToForm = () => {
    history.push('/trips/application');
  };

  const [component, setComponent] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${baseUrl}/${name}/trips`)
      .then((res) => {
        console.log(res.data);
        setComponent(res.data.trips);
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
        <Button variant="contained" onClick={GoToForm}>
          Inscreva-se
        </Button>
      </Buttons>
      <Container>
        {component.map((comp) => {
          return (
            <Container key={comp.id}>
              <ContainerList>
                <p>{comp.name}</p>
                <p>{comp.date}</p>
                <p>{comp.description}</p>
                <p>{comp.durationInDays}</p>
                <p>{comp.planet}</p>
              </ContainerList>
            </Container>
          );
        })}
      </Container>
    </MainContainer>
  );
}

export default List;
