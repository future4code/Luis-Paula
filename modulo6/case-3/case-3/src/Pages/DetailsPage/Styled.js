import styled from 'styled-components';

export const MainContainer = styled.div`
  font-family: 'Roboto';
`;

export const Cast = styled.h2`
  margin-left: 10vw;
`;

export const ActorsDiv = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  margin-left: 7vw;
  margin-right: 10vw;
`;

export const ActorsCards = styled.div`
  box-shadow: 3px 5px 3px gray;
  border-radius: 3%;
  padding: 2vh 2vw 0;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const VideosTitles = styled.h2`
  margin-left: 20vw;
`;

export const VideosCards = styled.iframe`
  margin-left: 20vw;
  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    width: 50vw;
    height: 50vh;
  }
`;

export const RecommendationTitle = styled.h3`
  margin-left: 10vw;
`;

export const RecommendationCards = styled.div`
  box-shadow: 3px 5px 3px gray;
  border-radius: 3%;
  padding: 2vh 2vw;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const Date = styled.p`
  text-align: left;
  font-weight: 700;
  color: #646464;
`;

export const RecommendationDiv = styled.div`
  margin-left: 10vw;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  margin-right: 10vw;
`;
