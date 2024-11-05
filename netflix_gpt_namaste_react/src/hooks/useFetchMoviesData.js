import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setMovies,
  setTopRatedMovies,
  setUpcomingMovies,
} from "../utils/Redux_store/Slices/movieSlice";

const useFetchMoviesData = () => {
  // console.log(' calling custom hook');

  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ3NzYzZmY5ODExNmI2MmMwODM2YThmNTEwOGYxMyIsIm5iZiI6MTczMDY0MzEyMy45NDAyNjExLCJzdWIiOiI2NzI1ZWE1ODBkOTIzZDk5MzU5ZjhiYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.is5405FugDrfL3KrrDyNksaxgROlxjWGYBGCzrBh18E`,
    },
  };

  // popular movies data

  const topRatedMoviesUrl =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const topRatedMoviesOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ3NzYzZmY5ODExNmI2MmMwODM2YThmNTEwOGYxMyIsIm5iZiI6MTczMDY0MzEyMy45NDAyNjExLCJzdWIiOiI2NzI1ZWE1ODBkOTIzZDk5MzU5ZjhiYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.is5405FugDrfL3KrrDyNksaxgROlxjWGYBGCzrBh18E`,
    },
  };

  // popular movies data

  const upcomingMoviesUrl =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const upcomingMoviesOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ3NzYzZmY5ODExNmI2MmMwODM2YThmNTEwOGYxMyIsIm5iZiI6MTczMDY0MzEyMy45NDAyNjExLCJzdWIiOiI2NzI1ZWE1ODBkOTIzZDk5MzU5ZjhiYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.is5405FugDrfL3KrrDyNksaxgROlxjWGYBGCzrBh18E`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const jsonData = await res.json();
      const topRatedMoviesData = await fetch(
        topRatedMoviesUrl,
        topRatedMoviesOptions
      );
      const topRatedMoviesJSON = await topRatedMoviesData.json();
      const upcomingMoviesData = await fetch(
        upcomingMoviesUrl,
        upcomingMoviesOptions
      );
      const upcomingMoviesJSON = await upcomingMoviesData.json();
      console.log("topRatedMoviesJSON: ", topRatedMoviesJSON);
      dispatch(setMovies(jsonData?.results));
      dispatch(setTopRatedMovies(topRatedMoviesJSON?.results));
      dispatch(setUpcomingMovies(upcomingMoviesJSON?.results));
    };
    fetchData();
  }, []);
};

export default useFetchMoviesData;
