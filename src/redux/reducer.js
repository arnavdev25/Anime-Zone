import { ERROR, GET_ALL_ANIMES, GET_SINGLE_ANIME, LOADING } from "./action";

const iniState = {
  loading: false,
  error: false,
  allAnimes: [],
  singleAnime: {},
};

export const reducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ANIMES:
      return {
        ...state,
        loading: false,
        error: false,
        allAnimes: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        allAnimes: [],
      };

    case GET_SINGLE_ANIME:
      return {
        ...state,
        loading: false,
        error: false,
        singleAnime: payload,
      };
    default:
      return state;
  }
};
