import {createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {MY_KEY} from '../../Utils/URL'
import axios from "axios";


export const fetchMovieDetails=createAsyncThunk(
'fetchMovieDetails/DetailsSlice',
async (id)=>{
const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}${MY_KEY}`)
return res.data
}
)


const initialState ={
  data:[],
  loading: false,
  error: "",
}

const DetailsSlice=createSlice({
initialState,
name:'DetailsSlice',
reducers:{},

extraReducers:(builder)=>{
builder.addCase(fetchMovieDetails.pending,(state)=>{
state.loading = true;
state.error = "";
});

builder.addCase(fetchMovieDetails.fulfilled,(state,action)=>{
state.loading=false;
state.data=action.payload;
})

builder.addCase(fetchMovieDetails.rejected, (state,action)=>{
    state.loading = false;
      state.data = [];
state.error=state.error = action.error.message;
})



}

})
export default DetailsSlice.reducer