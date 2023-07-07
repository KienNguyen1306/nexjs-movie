function InfoFilm({ detailFilm }: any) {
  return (
    <div className="left">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w400/${detailFilm.poster_path}`}
          alt="error"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            IMDB: <span>{detailFilm.IMDB}</span>
          </li>
          <li>
            Release Year:<span>{detailFilm.date}</span>
          </li>
          <li>
            Language: <span>{detailFilm.language}</span>
          </li>
          <li>
            IMDB-ID: <span>{detailFilm.IMDBID}</span>
          </li>
          <li>
            TMDB-ID: <span>{detailFilm.id}</span>
          </li>
          <li>
            Genre:
            <span>
              {detailFilm.genres.map((item: any) => {
                return (
                  <>
                    <span>{item.name}</span>
                    <span className="comma">,</span>
                  </>
                );
              })}
            </span>
          </li>
          <li>
            Runtime: <span>{detailFilm.Runtime} minute</span>
          </li>
          <li>
            Release Country:{" "}
            <span>
              {detailFilm.countries.map((item: any) => {
                return (
                  <>
                    <span>{item.name}</span>
                    <span className="comma">,</span>
                  </>
                );
              })}
            </span>
          </li>
        </ul>
        <h4>Plot</h4>
        <p className="line-clamp-4">{detailFilm.des}</p>
      </div>
    </div>
  );
}

export default InfoFilm;
