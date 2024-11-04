import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../../config/firebase";
import { setSignOut } from "../../utils/Redux_store/Slices/userSlice";
import { toast } from "react-toastify";
import { setMovies } from "../../utils/Redux_store/Slices/movieSlice";
import VideoContainer from "../browse/VideoContainer";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {}, [id]);

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

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ3NzYzZmY5ODExNmI2MmMwODM2YThmNTEwOGYxMyIsIm5iZiI6MTczMDU0MTk1NS41ODE1MzQsInN1YiI6IjY3MjVlYTU4MGQ5MjNkOTkzNTlmOGJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tya6pEJ9KLAsR6ygn61rPCbTBXUmiCTR1soeQxTdpdc`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);

      const jsonData = await res.json();

      // console.log("Res: ", jsonData);
      dispatch(setMovies(jsonData?.results));
    };
    fetchData();
  }, []);

  const user = useSelector((store) => store.user);
  console.log("Store: ", user.user);

  return (
    <div className="bg-black m-0 min-h-screen text-white p">
      {/* Header */}
      {/* <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Browse</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </header> */}

      {/* video background container with name  */}
      <VideoContainer />

      {/* Category Section */}
      <section className="mt-6 p-4">
        <h2 className="text-2xl font-semibold mb-4">Popular on Netflix</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Dummy thumbnail items */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded overflow-hidden shadow-lg"
            >
              <img
                src={`https://picsum.photos/200/300?random=${index + 1}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-2">
                <p className="text-sm font-medium">Movie Title {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Rows */}
      <section className="mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded overflow-hidden shadow-lg"
            >
              <img
                src={`https://picsum.photos/200/300?random=${index + 13}`}
                alt={`Thumbnail ${index + 13}`}
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-2">
                <p className="text-sm font-medium">Movie Title {index + 13}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
