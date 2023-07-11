import { mappingCaterogyToObject } from "@/helper";
import genreService from "@/services/genreServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  listGereric: {},
};

//fetch api
export const fetchGenericFilm: any = createAsyncThunk(
  "generic/fetchgeneric",
  async (params, thunkAPI) => {
    const response = await genreService.getGenre();
    return mappingCaterogyToObject(response.data.genres);
  }
);

//============================== slice =======================
export const genericFilm = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenericFilm.fulfilled, (state, action) => {
      state.listGereric = action.payload;
    });
  },
});

export default genericFilm.reducer;
