import { mappingFIlmDetail, mappingFIlmItem } from "@/helper";
import filmService from "@/services/filmServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  listLater: [],
  listPopular: { list: [], currentPages: 1, totalPages: 0 },
  listFilmCate: { list: [], currentPages: 1, totalPages: 0 },
  listRelate: [],
  detailFilm: {},
  searchFilm: { list: [], currentPages: 1, totalPages: 0, totalItem: 0 },
};

//fetch api
export const fetchListFilm: any = createAsyncThunk(
  "film/fetchFilmTop",
  async (params, thunkAPI) => {
    const response = await filmService.getTopFilm();
    return response.data.results.map(mappingFIlmItem);
  }
);

export const fetchListPopular: any = createAsyncThunk(
  "film/fetchFilmPopular",
  async (params: any, thunkAPI) => {
    const response = await filmService.getFilmPopular({ page: params });
    let listdata = response.data.results.map(mappingFIlmItem);
    let data = {
      list: listdata,
      totalPage: response.data.total_pages,
      currentPage: response.data.page,
    };
    return data;
  }
);

export const fetchDetailFilm: any = createAsyncThunk(
  "film/detailFilm",
  async (params: any, thunkAPI) => {
    const response = await filmService.getFilmDetail({ filmID: params.id });
    let data: any = mappingFIlmDetail(response.data);

    const resImage = await filmService.getFilmDetailImage({
      filmID: params.id,
    });

    let listImage = resImage.data.backdrops;
    data.images = listImage;
    return data;
  }
);

export const fetchListFilmRelate: any = createAsyncThunk(
  "film/filmRelate",
  async (params: any, thunkAPI) => {
    const response = await filmService.getFilmRelate({ filmID: params.id });
    return response.data.results.map(mappingFIlmItem);
  }
);

export const fetchSearchFilm: any = createAsyncThunk(
  "film/searchFilm",
  async (params: any, thunkAPI) => {
    const response = await filmService.getFilmSearch({
      query: params.query,
      page: 1,
    });

    let list = response.data.results.map(mappingFIlmItem);
    return {
      list: list,
      totalItem: response.data.total_results,
    };
  }
);

export const fetchListFilmCaterogy: any = createAsyncThunk(
  "film/filmCaterogy",
  async (params: any, thunkAPI) => {
    const response = await filmService.getFilmCaterogy({
      cateID: params.id,
      page: params.page,
    });
    let listdata = response.data.results.map(mappingFIlmItem);
    let data = {
      list: listdata,
      totalPage: response.data.total_pages,
      currentPage: response.data.page,
    };
    return data;
  }
);

//============================== slice =======================
export const listFilm = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListFilm.fulfilled, (state, action) => {
        state.listLater = action.payload;
      })
      .addCase(fetchListPopular.fulfilled, (state, action) => {
        state.listPopular = action.payload;
      })
      .addCase(fetchDetailFilm.fulfilled, (state, action) => {
        state.detailFilm = action.payload;
      })
      .addCase(fetchListFilmRelate.fulfilled, (state, action) => {
        state.listRelate = action.payload;
      })
      .addCase(fetchSearchFilm.fulfilled, (state, action) => {
        state.searchFilm.list = action.payload.list;
        state.searchFilm.totalItem = action.payload.totalItem;
      })
      .addCase(fetchListFilmCaterogy.fulfilled, (state, action) => {
        state.listFilmCate = action.payload;
      });
  },
});

export default listFilm.reducer;
