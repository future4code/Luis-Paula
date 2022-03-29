import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Components/Header';
import { MegaPage } from '../Pages/Mega/MegaPage';
import { QuinaPage } from '../Pages/Quina/Quina';
import { TimeManiaPage } from '../Pages/TimeMania/TimeMania';
import { LotoFacilPage } from '../Pages/LotoFacil/LotoFacil';
import { LotoManiaPage } from '../Pages/LotoMania/LotoMania';
import { SortePage } from '../Pages/DiaDeSorte/Sorte';
import { ErrorPage } from '../Pages/ErrorPage/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MegaPage />} />
        <Route path='/quina' element={<QuinaPage />} />
        <Route path='/facil' element={<LotoFacilPage />} />
        <Route path='/mania' element={<LotoManiaPage />} />
        <Route path='/sorte' element={<SortePage />} />
        <Route path='/time' element={<TimeManiaPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
