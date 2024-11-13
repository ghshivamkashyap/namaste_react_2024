import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { firebaseAuth } from "../../config/firebase";
import client from "../../utils/openAi";

const GPTSearch = ({ handleGPTButtonClick }) => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [moviesData, setMoviesData] = useState([]);
  const handleLogout = async () => {
    console.log("Logout called");

    try {
      await signOut(firebaseAuth);
      console.log("User logged out successfully");

      toast.success("Logegd out...");

      navigate("/");
    } catch (error) {
      toast.error("Error logging out...");
      console.error("Logout error:", error.message);
    } finally {
      console.log("Finally block executed");
    }
  };

  const handleSearchButtonClick = async () => {
    setMoviesData([]);
    const query = searchInputRef.current.value;
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ3NzYzZmY5ODExNmI2MmMwODM2YThmNTEwOGYxMyIsIm5iZiI6MTczMTUxMjE5My42NDk0OTUsInN1YiI6IjY3MjVlYTU4MGQ5MjNkOTkzNTlmOGJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iZ3rxrN5nN0tMnBkCV4I6r5GtRaY1TXc4poUAkUji4I",
      },
    };

    let res = await fetch(url, options);

    const jsonRes = await res.json();
    if (jsonRes.results.length != 0) {
      setMoviesData(jsonRes?.results);
    }

    console.log("Response:", jsonRes);
  };
  return (
    <>
      <div
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgdcxdajg/image/upload/v1730048587/netflix_background_zvdmqr.jpg')`,
        }}
      >
        <div className="absolute top-0 w-full flex justify-between items-center px-10 py-5 bg-opacity-50 text-white z-20">
          <h1 className="text-3xl font-bold">NetflixGPT Search</h1>
          <div className=" gap-x-2 flex">
            <button
              onClick={handleGPTButtonClick}
              className="bg-purple-600 px-4 py-2 hover:bg-purple-500 cursor-pointer rounded-md"
            >
              Home
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 hover:bg-red-500 cursor-pointer rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center mt-10 px-4 py-6 w-11/12 sm:w-2/3 lg:w-1/2">
          <h2 className="text-2xl text-white mb-4">
            Find Your Favorite Shows and Movies
          </h2>
          <div className="flex w-full">
            <input
              type="text"
              ref={searchInputRef}
              placeholder="What would you like to watch today.?"
              className="w-full px-4 py-3 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-red-500"
            />
            <button
              className="bg-red-600 px-4 py-2 hover:bg-red-500 cursor-pointer rounded-md"
              onClick={() => handleSearchButtonClick()}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <section
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgdcxdajg/image/upload/v1730048587/netflix_background_zvdmqr.jpg')`,
        }}
        className=" p-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Dummy thumbnail items */}
          {moviesData &&
            moviesData.map((movie, index) => (
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
                  <div className=" flex gap-x-2">
                    <p className="text-sm font-medium">{movie?.title}</p>{" "}
                    <p className="text-sm font-medium">
                      ({movie?.release_date.split("-")[0]})
                    </p>
                  </div>
                  <p className="text-sm font-normal">
                    Avg rating {movie?.vote_average}/10
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default GPTSearch;
