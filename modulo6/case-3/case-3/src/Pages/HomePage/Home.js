import React, { useEffect, useState } from 'react';
import { getMovies } from '../../API/getRequests';
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../Routes/Coordinates';

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
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.vote_average}</p>
        <p>{item.release_date}</p>
        <p>{item.overview}</p>
        <p>{item.original_title}</p>
        <button
          onClick={() => {
            clickDetails(item.id);
          }}
        >
          Detalhes
        </button>
        <br />
        <br />
      </div>
    );
  });
  console.log(movieData);

  return (
    <div>
      <h1>Home</h1>
      <div>{renderInfo}</div>
    </div>
  );
};
