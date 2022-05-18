import styled from 'styled-components';

export const MainContainer = styled.div`
  font-family: 'Roboto';
  background-color: #5c16c5;
  color: white;
  margin-top: -2.799vh;
  margin-left: -0.5vw;
`;

export const H1 = styled.h1`
  margin-bottom: 1vh;
  margin-left: 10vw;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const SecondaryContainer = styled.div`
  display: flex;
  background-color: #2d0c5e;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  margin-left: 10vw;
  padding: 1vh;
  border-radius: 5%;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    height: 75vh;
    width: 50vw;
    margin-left: 0;
    align-self: center;
    padding: 5vh 0 3vh 0;
  }
`;

export const TerciaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 3vw;
  margin-right: 10vw;
`;

export const Title = styled.p`
  font-size: 4vh;
  font-weight: 700;
`;

export const Genres = styled.p`
  margin-top: -3vh;
`;

export const ReviewContainer = styled.div`
  margin-bottom: 5vh;
`;

export const Review = styled.a`
  color: #14ff00;
  font-size: 5vh;
  margin-top: -1vh;
  border: 5px solid #14ff00;
  border-radius: 100%;
  padding: 1vh;
`;

export const Info = styled.p`
  margin-top: -3vh;
`;

export const Crew = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
