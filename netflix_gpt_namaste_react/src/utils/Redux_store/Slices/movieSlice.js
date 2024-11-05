import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: null, topRatedMovies: null, upcomingMovies: null },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { setMovies, setTopRatedMovies, setUpcomingMovies } =
  movieSlice.actions;
