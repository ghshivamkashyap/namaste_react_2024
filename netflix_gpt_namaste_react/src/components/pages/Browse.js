import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { firebaseAuth } from "../../config/firebase";
import { setSignOut } from "../../utils/Redux_store/Slices/userSlice";
import { toast } from "react-toastify";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("Browse page: ", id);
  }, [id]);

  const handleLogout = async () => {
    console.log("Logout called");

    try {
      await signOut(firebaseAuth);
      console.log("User logged out successfully");

      // Update loading toast to success message
      toast.success("Logegd out...");

      navigate("/");
    } catch (error) {
      // Update loading toast to error message
      toast.error("Error logging out...");
      console.error("Logout error:", error.message);
    } finally {
      console.log("Finally block executed");
      // No need to update the toast again here
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Browse</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </header>

      {/* Category Section */}
      <section className="mt-6">
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
      <section className="mt-10">
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
