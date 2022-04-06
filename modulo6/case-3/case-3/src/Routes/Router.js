import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailsPage } from '../Pages/DetailsPage/Details';
import { HomePage } from '../Pages/HomePage/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
