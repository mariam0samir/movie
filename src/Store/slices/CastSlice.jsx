import { MY_KEY } from '../../Utils/URL'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovieCast = createAsyncThunk(
  'castSlice/fetchMovieCast',
  async (id) => {
    const res = await axios.get( `https://api.themoviedb.org/3/movie/${id}/credits${MY_KEY}`);
    return res.data;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export const CastSlice = createSlice({
  name: 'castSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCast.pending, (state) => {
      state.loading = true;
      state.error = '';
    });

builder.addCase(fetchMovieCast.fulfilled, (state, action) => {
  state.loading = false;
  state.data = action.payload.cast;
});



    builder.addCase(fetchMovieCast.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default CastSlice.reducer;
