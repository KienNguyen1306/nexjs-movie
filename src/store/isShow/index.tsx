import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isBar: false,
  isSearch: false,
};

export const isShow = createSlice({
  name: "show",
  initialState,
  reducers: {
    toggleBar: (state, action) => {
      state.isBar = !state.isBar;
    },
    toggleSearch: (state, action) => {
      state.isSearch = !state.isSearch;
    },
  },
});

export const { toggleBar, toggleSearch } = isShow.actions;

export default isShow.reducer;
