import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage/HomePage';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import Form from '../pages/ApplicationFormPage/ApplicationFormPage';
import Create from '../pages/CreateTripPage/CreateTripPage';
import List from '../pages/ListTripsPage/ListTripsPage';
import Login from '../pages/LoginPage/LoginPage';
import Details from '../pages/TripDetails/TripDetailsPage';
import { Footer, MainContainer } from './StyledRoute';

export function Router() {
  return (
    <BrowserRouter>
      <MainContainer>LabeX</MainContainer>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route exact path={'/trips/list'}>
          <List />
        </Route>

        <Route exact path={'/trips/application'}>
          <Form />
        </Route>

        <Route exact path={'/admin/trips/list'}>
          <AdminHomePage />
        </Route>

        <Route exact path={'/admin/trips/create'}>
          <Create />
        </Route>

        <Route exact path={'/login'}>
          <Login />
        </Route>

        <Route exact path={'/admin/trips/:id'}>
          <Details />
        </Route>
      </Switch>
      <Footer>Viaje como no futuro, hoje!</Footer>
    </BrowserRouter>
  );
}
