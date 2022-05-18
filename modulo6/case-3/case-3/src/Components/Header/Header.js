import { useEffect, useState } from 'react';
import { getGenres } from '../../API/getRequests';
import {
  Button,
  Filter,
  GenreDiv,
  HeaderDiv,
  HeaderMod,
  PreHeader,
} from './Styled';

export const Header = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres(setGenres);
  }, []);

  const renderGenre = genres.map((i) => {
    return (
      <div key={i.id}>
        <Button>{i.name}</Button>
      </div>
    );
  });
  return (
    <HeaderDiv>
      <PreHeader>TMDB</PreHeader>
      <HeaderMod>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </HeaderMod>
      <Filter>FILTRE POR:</Filter>
      <GenreDiv>{renderGenre}</GenreDiv>
    </HeaderDiv>
  );
};
