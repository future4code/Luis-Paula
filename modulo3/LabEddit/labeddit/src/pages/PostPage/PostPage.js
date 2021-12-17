import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { createComment } from '../../services/posts';
import { Comments } from './StyledPost';

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);
  const [form, handleInputChange, clear] = useForm({ body: '' });
  const [isLoading, setIsLoading] = useState(false);

  const submitComment = (e) => {
    e.preventDefault();
    createComment(form, params.id, setIsLoading);
    clear();
  };

  const comments = post.map((p) => {
    return (
      <Comments>
        <p>{p && p.username}</p>
        <p>{p && p.body}</p>
      </Comments>
    );
  });

  return (
    <div>
      <h1>Post</h1>
      <form onSubmit={submitComment}>
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
            <>Novo Comentário</>
          )}
        </Button>
      </form>
      {comments.length > 0 ? comments : <Loading />}
    </div>
  );
};
export default PostPage;
