import API from "./api";
let api_key = "e2c32d467111c020ae1e2584fc532e39";
const filmService = {
  getTopFilm: (inputParams = {}) => {
    return API.call().get(
      `/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
      {
        params: {
          ...inputParams,
        },
      }
    );
  },
  getFilmPopular: ({ page = 1 }: { page: number }) => {
    return API.call().get(
      `/3/movie/popular?api_key=${api_key}&language=en-US&page=${page} `
    );
  },
  getFilmRelate: ({ filmID }: { filmID: any }) => {
    return API.call().get(
      `/3/movie/${filmID}/similar?api_key=${api_key}&language=en-US&page=1`
    );
  },
  getFilmDetail: ({ filmID }: { filmID: any }) => {
    return API.call().get(
      `/3/movie/${filmID}?api_key=${api_key}&append_to_response=videos `
    );
  },

  getFilmDetailImage: ({ filmID }: { filmID: any }) => {
    return API.call().get(`/3/movie/${filmID}/images?api_key=${api_key}`);
  },

  getFilmSearch: ({ query, page = 1 }: { query: String; page: Number }) => {
    return API.call().get(
      `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${api_key}`
    );
  },
};

export default filmService;
