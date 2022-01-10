export const goToLogin = (navigate) => {
  navigate('/login');
};

export const goToSignUp = (navigate) => {
  navigate('/signup');
};

export const goToFeed = (navigate) => {
  navigate('/');
};

export const goToPost = (navigate, id) => {
  navigate(`/post/${id}`);
};
