import styled from 'styled-components';

export const HeaderDiv = styled.div`
  font-family: 'Roboto';
  background-color: #2d0c5e;
  padding-bottom: 150px;
  margin-top: -2.8vh;
  margin-left: -0.7vw;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    padding-bottom: 30px;
  }
`;

export const PreHeader = styled.h1`
  left: 0px;
  top: 0px;
  border-radius: 0px;
  color: white;
  background-color: #5c16c5;
  padding-left: 10vw;
  padding-bottom: 1vh;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    text-align: center;
    padding-left: 0;
  }
`;

export const HeaderMod = styled.h1`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.005em;
  text-align: center;
  color: white;
  height: 112px;
  width: 781px;
  margin-left: 328px;
  top: 141px;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    font-size: 30px;
    margin-left: 3vw;
    text-align: left;
    width: auto;
    height: auto;
    line-height: 40px;
  }
`;

export const Filter = styled.div`
  text-align: center;
  color: white;
  margin-bottom: -2vh;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    text-align: left;
    margin-left: 3vw;
  }
`;

export const GenreDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 22vw;
  margin-left: 22vw;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    justify-content: flex-start;
    margin-left: 3vw;
  }
`;

export const Button = styled.button`
  font-family: Roboto;
  font-weight: 900;
  padding: 10px;
  height: 5vh;
  margin-right: 10px;
  margin-top: 3vh;
  border-radius: 10%;
  border: none;
  text-align: center;
  :hover {
    background-color: #5c16c5;
  }

  :focus {
    background-color: #d18000;
    transition: 0.7s;
  }
`;
