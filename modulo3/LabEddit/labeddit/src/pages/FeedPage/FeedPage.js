import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { goToPost } from '../../routes/coordinates';
import { createPost } from '../../services/posts';
import { Cards } from './StyledFeed';

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const feed = useRequestData([], `${BASE_URL}/posts`);
  const [form, handleInputChange, clear] = useForm({ title: '', body: '' });
  const [isLoading, setIsLoading] = useState(false);

  const clickPost = (id) => {
    goToPost(navigate, id);
  };

  const feedCards = feed.map((item) => {
    return (
      <Button
        onClick={() => {
          clickPost(item.id);
        }}
        fullWidth
      >
        <Cards key={item.id} fullWidth>
          <h3>{item.username}</h3>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </Cards>
      </Button>
    );
  });

  const submitPost = (e) => {
    e.preventDefault();
    createPost(form, setIsLoading);
    clear();
  };

  return (
    <div>
      <h1>Feed</h1>
      <form onSubmit={submitPost}>
        <TextField
          id="title"
          label="Título"
          variant="outlined"
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          fullWidth
          margin={'dense'}
          required
        />
        <TextField
          id="body"
          label="Texto"
          variant="outlined"
          type="text"
          name="body"
          value={form.body}
          onChange={handleInputChange}
          fullWidth
          margin={'dense'}
          required
        />
        <Button variant="contained" color="secondary" fullWidth type="submit">
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Novo Post</>
          )}
        </Button>
      </form>
      <div>{feedCards.length > 0 ? feedCards : <Loading />}</div>
    </div>
  );
};
export default FeedPage;
