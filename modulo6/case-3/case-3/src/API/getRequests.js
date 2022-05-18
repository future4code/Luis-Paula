import axios from 'axios';
import { Base_URL } from '../Constants/Base_URL';
import { key } from '../Constants/apiKey';

export const getMovies = (setData) => {
  axios
    .get(`${Base_URL}/movie/popular/?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getDetails = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getActors = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}/credits?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data.cast);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getCrew = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}/credits?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data.crew);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getVideo = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}/videos?${key}`)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getRecommendations = (setData, id) => {
  axios
    .get(`${Base_URL}/movie/${id}/recommendations?${key}`)
    .then((res) => {
      setData(res.data.results);
    })
    .catch((err) => {
      alert(err.message);
    });
};

export const getGenres = (setData) => {
  axios
    .get(`${Base_URL}/genre/movie/list?${key}&language=pt-BR`)
    .then((res) => {
      setData(res.data.genres);
    })
    .catch((err) => {
      alert(err.message);
    });
};
