import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { CreatePost } from '../../services/posts';
import { Cards } from './StyledFeed';

const FeedPage = () => {
  useProtectedPage();
  const feed = useRequestData([], `${BASE_URL}/posts`);
  const [form, handleInputChange, clear] = useForm({ title: '', body: '' });

  const feedCards = feed.map((item) => {
    return (
      <Cards key={item.id}>
        <h3>{item.username}</h3>
        <p>{item.title}</p>
        <p>{item.body}</p>
      </Cards>
    );
  });

  // const submitPost = (e) => {
  //   CreatePost(form);
  //   clear();
  // };

  // console.log(submitPost());
  return (
    <div>
      <h1>Feed</h1>
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
      />
      <Button variant="contained" color="secondary" fullWidth>
        Enviar
      </Button>
      <div>{feedCards}</div>
    </div>
  );
};
export default FeedPage;
