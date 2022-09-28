import axios from "axios";
export const LOADING = "LOADING";
export const GET_ALL_ANIMES = "GET_ALL_ANIMES";
export const GET_SINGLE_ANIME = "GET_SINGLE_ANIME";
export const ERROR = "ERROR";

export const loading = () => ({
  type: LOADING,
});

export const error = () => ({
  type: ERROR,
});

export const getAllAnimes = (payload) => ({
  type: GET_ALL_ANIMES,
  payload,
});

export const getOneAnime = (payload) => ({
  type: GET_SINGLE_ANIME,
  payload,
});

export const callForAllAnimes = (page) => (dispatch) => {
  dispatch(loading());
  axios
    .get(`https://api.jikan.moe/v4/anime?page=${page}`)
    .then(({ data }) => dispatch(getAllAnimes(data.data)))
    .catch((e) => dispatch(error()));
};

export const callForSingleAnime = (id) => (dispatch) => {
  dispatch(loading());
  axios
    .get(`https://api.jikan.moe/v4/anime/${id}`)
    .then(({ data }) => {
      console.log(data.data);
      dispatch(getOneAnime(data.data));
      localStorage.setItem("Anime", JSON.stringify(data.data));
    })
    .catch((e) => dispatch(error()));
};
