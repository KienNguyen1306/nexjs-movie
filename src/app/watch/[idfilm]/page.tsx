"use client";

import ItemArticle from "@/components/ItemArticle";
import "./watch.css";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailFilm, fetchListFilmRelate } from "@/store/filmSlice";
import Head from "next/head";
import Loading from "@/components/shared/loading/loading2";
import SreenImage from "./SreenImage";
import InfoFilm from "./InfoFilm";
import VideoFilm from "./VideoFilm";

function Movie() {
  const detailFilm = useSelector((state: any) => state.FILM.detailFilm);
  const listRelate = useSelector((state: any) => state.FILM.listRelate);

  console.log("detail", detailFilm);
  const [loading, setLoaing] = useState(true);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailFilm({ id: params.idfilm })).then(() => {
      setLoaing(false);
    });
    dispatch(fetchListFilmRelate({ id: params.idfilm }));
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="movie">
      <head>
        <title>watch</title>
      </head>
      <div className="container">
        <div className="body">
          <div className="top">
            <h2>All Aboard for Love</h2>
          </div>
          <div className="movie-main">
            <InfoFilm detailFilm={detailFilm} />
            <VideoFilm IMDBID={detailFilm.IMDBID} />
          </div>
        </div>
        <div className="screenshots">
          <h2>SREENSHOTS</h2>
          <div className="screenshots-main">
            {detailFilm.images.map((item: any, index: number) => {
              return <SreenImage key={index} image={item.file_path} />;
            })}
          </div>
        </div>
        <div className="relat">
          <h2>You may also like</h2>
          <div className="relat-main">
            {listRelate.map((item: object, index: number) => {
              return <ItemArticle data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
