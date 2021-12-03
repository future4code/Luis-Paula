import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 5px black;
  align-items: center;
  margin: 0 62vh;

  img {
    align-items: center;
    width: 35vw;
    height: 70vh;
  }
`;

const Icons = styled.div`
  display: flex;
`;
const Icone1 = styled.div`
  :hover {
    background-color: pink;
  }
`;

const Icone2 = styled.div`
  :hover {
    background-color: pink;
  }
`;

function Home(props) {
  const baseUrl =
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';
  const aluno = 'luis';
  const autorizacao = 'luis-paula-carver';

  const [parametro, setParametro] = useState([]);
  const [idUsuario, setIdUsuario] = useState('');
  const [like, setLike] = useState(false);

  useEffect(() => {
    chooseProfile();
  }, [like]);
  // useEffect(() => {
  //   choosePerson();
  // }, [setIdUsuario]);

  const onClickLike = (like) => {
    setLike(like);
    choosePerson(chooseProfile());
  };

  const chooseProfile = () => {
    axios
      .get(`${baseUrl}/${aluno}/person`)
      .then((res) => {
        console.log(res);
        setParametro(res.data.profile);
        setIdUsuario(res.data.profile.id);
      })
      .catch((err) => {
        alert('Erro! Tente novamente.');
      });
  };
  const choosePerson = () => {
    const body = { id: idUsuario, choice: like };
    axios
      .post(`${baseUrl}/${aluno}/choose-person`, body, {
        headers: { Authorization: `${autorizacao}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.isMatch) {
          alert('Você tem um novo match!');
        } else {
        }
      })
      .catch((err) => {
        alert('Erro! Tente novamente.');
      });
  };

  return (
    <div>
      <Card>
        <h3>AstroMatch</h3>
        <ChatIcon color="secondary" onClick={props.irParaMatch} />
        <img src={parametro.photo} alt="foto" />
        <p>
          {parametro.name}, {parametro.age}
        </p>
        <p>{parametro.bio}</p>
        <Icons>
          <Icone1>
            <CloseIcon
              fontSize="large"
              color="secondary"
              onClick={() => {
                onClickLike(false);
              }}
            />
          </Icone1>
          <Icone2>
            <FavoriteIcon
              fontSize="large"
              color="secondary"
              onClick={() => {
                onClickLike(true);
              }}
            />
          </Icone2>
        </Icons>
      </Card>
    </div>
  );
}

export default Home;
