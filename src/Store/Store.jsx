import { configureStore } from "@reduxjs/toolkit";
import topRated from "./slices/topRatedSlice";
import allMoviesReducer from "./slices/allMovieSlice";
import Love from "./slices/Love";
import DetailsSlice from "../Store/slices/DetailsSlice";
import CastData from '../Store/slices/CastSlice'
import similarSlice from '../Store/slices/similarSlice'
import Search from "../Store/slices/searchSlice";

export const store = configureStore({
  reducer: {
    topRated: topRated,
    allMovies: allMoviesReducer,
    love: Love,
    Details:DetailsSlice,
    cast:CastData,
    similar:similarSlice,
    search:Search
  },
});
