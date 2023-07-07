export function mappingFIlmDetail(item: {
  id: any;
  vote_average: any;
  release_date: any;
  spoken_languages: any;
  imdb_id: any;
  runtime: any;
  overview: any;
  backdrop_path: any;
  poster_path: any;
  genres: any;
  production_countries: any;
}) {
  return {
    id: item.id,
    IMDB: item.vote_average,
    date: item.release_date,
    language: item.spoken_languages,
    IMDBID: item.imdb_id,
    genres: item.genres,
    Runtime: item.runtime,
    countries: item.production_countries,
    des: item.overview,
    backdrop_path: item.backdrop_path,
    poster_path: item.poster_path,
  };
}

export function mappingFIlmItem(item: any) {
  return {
    id: item.id,
    image: item.poster_path,
    title: item.title,
    vote_average: item.vote_average,
    genre_ids: item.genre_ids,
  };
}

export function mappingCaterogyToObject(array: any) {
  let res: any = {};
  for (let i = 0; i < array.length; i++) {
    res[array[i].id] = {
      id: array[i].id,
      name: array[i].name,
    };
  }
  return res;
}
