import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchMoviesData from "../../hooks/useFetchMoviesData";
import VideoContainer from "../browse/VideoContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchMoviesData();
  const storedata = useSelector((store) => store?.movie);
  const movieData = storedata?.movies;
  const topRatedMovies = storedata?.topRatedMovies;

  const upcomingMovies = storedata?.topRatedMovies;
  const user = useSelector((store) => store.user);
  console.log("movieData: ", storedata);

  if (!storedata) return null;

  return (
    <div className="bg-black m-0 min-h-screen text-white p">
      {/* video background container with name  */}

      <VideoContainer />

      {/* Category Section */}
      <section className="mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4">Now Playing</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Dummy thumbnail items */}
          {movieData &&
            movieData.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-2">
                  <p className="text-sm font-medium">{movie?.title}</p>
                  <p className="text-sm font-normal">
                    Avg rating {movie?.vote_average}/10
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Toprated movies data */}
      <section className="mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4">Top rated movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Dummy thumbnail items */}
          {topRatedMovies &&
            topRatedMovies.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-2">
                  <p className="text-sm font-medium">{movie?.title}</p>
                  <p className="text-sm font-normal">
                    Avg rating {movie?.vote_average}/10
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Upcoming movies data */}
      <section className="mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4">Upcoming movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Dummy thumbnail items */}
          {upcomingMovies &&
            upcomingMovies.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-2">
                  <p className="text-sm font-medium">{movie?.title}</p>
                  <p className="text-sm font-normal">
                    Avg rating {movie?.vote_average}/10
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
