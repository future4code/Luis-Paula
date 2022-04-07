import { useEffect, useState } from 'react';
import { FooterMod } from './Styled';

export const Footer = () => {
  const { page, setPage } = useState(1);

  const goToNext = (number) => {
    setPage(page + number);

    window.scrollTo(0, 0);
  };

  const goBack = (number) => {
    if (page >= 2) {
      setPage(page - number);
    }
    window.scrollTo(0, 0);
  };
  return (
    <FooterMod>
      <button onClick={() => goBack(1)}>Voltar</button>
      <p>{page}</p>
      <button onClick={() => goToNext(1)}>Avançar</button>
    </FooterMod>
  );
};
