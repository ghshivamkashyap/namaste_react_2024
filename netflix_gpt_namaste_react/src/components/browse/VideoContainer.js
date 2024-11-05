import React from "react";
import { useSelector } from "react-redux";
import { firebaseAuth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const VideoContainer = () => {
 
  
  const navigate = useNavigate();
  const movieData = useSelector((store) => store?.movie?.movies);

  if (!movieData) return null;
  const singleMovie = movieData[0];
  console.log("singleMovie: ", singleMovie);
  // console.log("movieData: ", movieData);

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

  return (
    <div className="relative h-screen w-full bg-pink-300 overflow-hidden m-0 p-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dgdcxdajg/video/upload/v1730733924/NetflixGPT/wijmkmuxpcyy8kdqkw2j.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Header with Logout Button */}
      <div className="absolute top-0 w-full flex justify-between items-center px-10 py-5 bg-opacity-50 text-white z-20">
        <h1 className="text-3xl font-bold">NetflixGPT</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 hover:bg-red-500 cursor-pointer rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="absolute w-full h-full flex flex-col justify-end items-start pb-10 pl-10 bg-black bg-opacity-50 text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {singleMovie?.original_title || "Movie Title"}
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-lg">
          {singleMovie?.overview.substring(0, 104) ||
            "A brief description of the movie."}
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-red-600 rounded-md font-semibold hover:bg-red-700">
            Play
          </button>
          <button className="px-6 py-3 bg-gray-800 bg-opacity-70 rounded-md font-semibold hover:bg-gray-700">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
