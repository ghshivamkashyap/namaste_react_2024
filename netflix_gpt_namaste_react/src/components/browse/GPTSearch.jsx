import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { firebaseAuth } from "../../config/firebase";

const GPTSearch = ({ handleGPTButtonClick }) => {
  const navigate = useNavigate();

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
    <div className="absolute top-0 w-full flex justify-between items-center px-10 py-5 bg-opacity-50 text-white z-20">
      <h1 className="text-3xl font-bold">NetflixGPT Search</h1>
      <div className=" gap-x-2 flex">
        <button
          onClick={handleGPTButtonClick}
          className="bg-purple-600 px-4 py-2 hover:bg-purple-500 cursor-pointer rounded-md"
        >
          GPT Search
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 hover:bg-red-500 cursor-pointer rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default GPTSearch;
