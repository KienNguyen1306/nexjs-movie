import API from "./api";
let api_key = "e2c32d467111c020ae1e2584fc532e39";
const genreService = {
  getGenre: () => {
    return API.call().get(`/3/genre/movie/list?api_key=${api_key}&language=vi`);
  },
};

export default genreService;
