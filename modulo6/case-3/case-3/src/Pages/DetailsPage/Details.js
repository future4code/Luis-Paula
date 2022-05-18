import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getActors, getRecommendations, getVideo } from '../../API/getRequests';
import { DetailsComp } from '../../Components/Details/DetailsComp';
import { goToDetails } from '../../Routes/Coordinates';
import { DateConversor } from '../../Services/DateConversor';
import {
  ActorsCards,
  ActorsDiv,
  Cast,
  Date,
  MainContainer,
  RecommendationCards,
  RecommendationDiv,
  RecommendationTitle,
  VideosCards,
  VideosTitles,
} from './Styled';

export const DetailsPage = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommendations, setRecommendations] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getVideo(setVideos, params.id);
    getActors(setActors, params.id);
    getRecommendations(setRecommendations, params.id);
  }, []);

  const clickDetails = (id) => {
    goToDetails(navigate, id);
  };

  const renderActors =
    actors &&
    actors.map((i) => {
      return (
        <ActorsCards key={i.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${i.profile_path}`}
            alt='foto'
          />
          <h3>{i.name}</h3>
          <p>{i.character}</p>
        </ActorsCards>
      );
    });

  const renderVideos =
    videos &&
    videos.map((i) => {
      if (i.type === 'Trailer') {
        return (
          <div key={i.id}>
            <VideosTitles>{i.name}</VideosTitles>
            <VideosCards
              width={900}
              height={500}
              src={`https://www.youtube.com/embed/${i.key}`}
              title={i.name}
            />
          </div>
        );
      }
    });

  const renderRecommendations =
    recommendations &&
    recommendations.slice(0, 5).map((i) => {
      return (
        <RecommendationCards
          key={i.id}
          onClick={() => {
            clickDetails(i.id);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${i.poster_path}`}
            alt={`poster do filme ${i.title}`}
          />
          <h2>{i.title}</h2>
          <Date>{DateConversor(i.release_date)}</Date>
        </RecommendationCards>
      );
    });

  return (
    <MainContainer>
      <DetailsComp />
      <Cast>Elenco Original</Cast>
      <ActorsDiv>{renderActors}</ActorsDiv>
      <div>{renderVideos}</div>
      <RecommendationTitle>Recomendações</RecommendationTitle>
      <RecommendationDiv>{renderRecommendations}</RecommendationDiv>
    </MainContainer>
  );
};
