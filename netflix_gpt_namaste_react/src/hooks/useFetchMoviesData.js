import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../utils/Redux_store/Slices/movieSlice";

const useFetchMoviesData = () => {
  // console.log(' calling custom hook');

  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);

      const jsonData = await res.json();

      console.log("Res: ", jsonData);
      dispatch(setMovies(jsonData?.results));
    };
    fetchData();
  }, []);
};

export default useFetchMoviesData;
