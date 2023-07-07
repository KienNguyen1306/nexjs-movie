"use client";

import { fetchListPopular } from "@/store/filmSlice";
import { fetchGenericFilm } from "@/store/generic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Myapp({ children }: { children: any }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenericFilm());
    dispatch(fetchListPopular());
  }, []);
  return <div className="app">{children}</div>;
}

export default Myapp;
