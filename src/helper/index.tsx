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
}) {
  return {
    id: item.id,
    IMDB: item.vote_average,
    date: item.release_date,
    language: "englissh",
    IMDBID: item.imdb_id,
    Genre: "TV Movie, Comedy",
    Runtime: item.runtime,
    Country: "Canada",
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
