"use client";
import LatestArticle from "@/components/LatestArticle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewlyAddArticle from "@/components/NewlyAddArticle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListFilm } from "@/store/filmSlice";
import { metadata } from "./layout";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListFilm());
  }, []);

  return (
    <div>
      <head>
        <title>Home</title>
        <meta name="description" content={metadata.description} />
      </head>
      <main className="home">
        <LatestArticle />
        <NewlyAddArticle />
      </main>
    </div>
  );
}
