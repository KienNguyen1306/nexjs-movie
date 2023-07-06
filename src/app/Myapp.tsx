"use client";

import store from "@/store";
import { fetchListPopular } from "@/store/filmSlice";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

function Myapp({ children }: { children: any }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListPopular());
  }, []);
  return <div className="app">{children}</div>;
}

export default Myapp;
