import React, { useEffect, useState } from 'react';
import { getMovies } from '../../API/getRequests';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../Routes/Coordinates';
import { Date, Img, MainContainer, P, SecondaryContainer } from './Styled';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { DateConversor } from '../../Services/DateConversor';

export const HomePage = () => {
  const [movieData, setMovieData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMovies(setMovieData);
  }, []);

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
        <Date>{DateConversor(item.release_date)}</Date>
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
