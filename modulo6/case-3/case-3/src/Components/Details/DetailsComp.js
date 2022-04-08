import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCrew, getDetails } from '../../API/getRequests';
import {
  Crew,
  Genres,
  H1,
  Img,
  Info,
  MainContainer,
  Review,
  SecondaryContainer,
  TerciaryContainer,
  Title,
} from './Styled';

export const DetailsComp = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    getDetails(setDetails, params.id);
    getCrew(setCrew, params.id);
  }, []);

  const renderGenres =
    details.genres &&
    details.genres.map((genre) => {
      return genre.name + ' ';
    });

  console.log(crew);
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
      <H1>TMDB</H1>
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
          <div>
            <h4>Avaliação dos usuários</h4>
            <Review>{details.vote_average} </Review>
          </div>
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
