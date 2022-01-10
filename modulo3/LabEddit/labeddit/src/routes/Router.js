import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = ({ setButtonText }) => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route
        path="/login"
        element={<LoginPage setButtonText={setButtonText} />}
      />
      <Route path="/post/:id" element={<PostPage />} />
      <Route
        path="/signup"
        element={<SignUpPage setButtonText={setButtonText} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
