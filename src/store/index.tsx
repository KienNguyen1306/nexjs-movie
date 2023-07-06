import { configureStore } from "@reduxjs/toolkit";
import fetchListFilm from "./filmSlice";
import isShow from "./isShow";

export const store = configureStore({
  reducer: { FILM: fetchListFilm, ISSHOW: isShow },
});

export default store;
