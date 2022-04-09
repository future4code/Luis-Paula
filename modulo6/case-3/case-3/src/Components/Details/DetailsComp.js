import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCrew, getDetails } from '../../API/getRequests';
import {
  Crew,
  Genres,
  H1,
  Img,
  Info,
  MainContainer,
  Review,
  ReviewContainer,
  SecondaryContainer,
  TerciaryContainer,
  Title,
} from './Styled';
import { goToHome } from '../../Routes/Coordinates';

export const DetailsComp = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [crew, setCrew] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDetails(setDetails, params.id);
    getCrew(setCrew, params.id);
  }, []);

  const clickHome = () => {
    goToHome(navigate);
  };

  const renderGenres =
    details.genres &&
    details.genres.map((genre) => {
      return genre.name + ' ';
    });

  const renderCrew = crew.slice(0, 5).map((i) => {
    return (
      <div key={i.credit_id}>
        <h4>{i.name}</h4>
        <p>{i.department}</p>
      </div>
    );
  });

  return (
    <MainContainer>
      <H1
        onClick={() => {
          clickHome();
        }}
      >
        TMDB
      </H1>
      <SecondaryContainer>
        <Img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={`poster do ${details.title}`}
        />
        <TerciaryContainer>
          <Title>
            {details.title}(
            {details.release_date &&
              details.release_date.split('-').slice(0, 1)}
            )
          </Title>
          <Genres>
            {details.release_date &&
              details.release_date.split('-').reverse().join('/')}{' '}
            (BR) - {renderGenres} - {details.runtime}m
          </Genres>
          <ReviewContainer>
            <h4>Avaliação dos usuários</h4>
            <Review>{details.vote_average} </Review>
          </ReviewContainer>
          <div>
            <h3>Sinopse</h3>
            <br />
            <Info>{details.overview}</Info>
          </div>
          <Crew>{renderCrew}</Crew>
        </TerciaryContainer>
      </SecondaryContainer>
    </MainContainer>
  );
};
