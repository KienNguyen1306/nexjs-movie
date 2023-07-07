"use client";
import LatestArticle from "@/components/LatestArticle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewlyAddArticle from "@/components/NewlyAddArticle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListFilm } from "@/store/filmSlice";
import { metadata } from "./layout";
import Head from "next/head";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListFilm());
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className="home">
        <LatestArticle />
        <NewlyAddArticle />
      </div>
    </>
  );
}
