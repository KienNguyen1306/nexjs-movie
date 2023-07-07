import { configureStore } from "@reduxjs/toolkit";
import fetchListFilm from "./filmSlice";
import isShow from "./isShow";
import generic from "./generic";

export const store = configureStore({
  reducer: { FILM: fetchListFilm, ISSHOW: isShow, GENERIC: generic },
});

export default store;
