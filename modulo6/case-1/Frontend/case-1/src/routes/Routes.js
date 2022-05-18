import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';
import { PizzasPage } from '../pages/PizzasPage/PizzasPage';
import { SingleOrderPage } from '../pages/SingleOrderPage/SingleOrderPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PizzasPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/orders/:id' element={<SingleOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
