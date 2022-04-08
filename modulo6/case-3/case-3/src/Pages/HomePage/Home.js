import React, { useEffect, useState } from 'react';
import { getMovies } from '../../API/getRequests';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../Routes/Coordinates';
import {
  Button,
  Date,
  Img,
  MainContainer,
  P,
  SecondaryContainer,
} from './Styled';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';

export const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const { actualPage } = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    getMovies(setMovieData, actualPage);
  }, [actualPage]);

  const clickDetails = (id) => {
    goToDetails(navigate, id);
  };

  const renderInfo = movieData.map((item) => {
    return (
      <SecondaryContainer
        key={item.id}
        onClick={() => {
          clickDetails(item.id);
        }}
      >
        <Img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt='poster'
        />
        <P>{item.title}</P>
        <Date>{item.release_date.split('-').reverse().join('/')}</Date>
      </SecondaryContainer>
    );
  });

  return (
    <div>
      <Header />
      <MainContainer>{renderInfo}</MainContainer>
      <Footer />
    </div>
  );
};
