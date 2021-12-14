import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
