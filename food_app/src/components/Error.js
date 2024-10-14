import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" flex flex-col w-full h-screen items-center justify-center gap-y-6">
      Error 404 not found
      <Link to={"/"}>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back to home
        </button>
      </Link>
      <a href="/">Home</a>
    </div>
  );
};

export default Error;
