import styled from 'styled-components';

export const FooterMod = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  margin-left: 46%;
  margin-top: 60px;

  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    margin-left: 30vw;
  }
`;
