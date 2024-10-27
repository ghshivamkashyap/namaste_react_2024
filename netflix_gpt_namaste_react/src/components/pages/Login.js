import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgdcxdajg/image/upload/v1730048587/netflix_background_zvdmqr.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-65 p-10 rounded-lg w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          {isSignIn ? <>Sign in</> : <>Sign up</>}
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm password"
              className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          {isSignIn ? (
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            >
              Sign In
            </button>
          ) : (
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            >
              Sign up
            </button>
          )}
        </form>
        <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox bg-gray-700" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        {isSignIn ? (
          <div className="text-gray-400 mt-8 text-center">
            New to NetflixGPT?{" "}
            <a
              href="#"
              onClick={() => setIsSignIn(false)}
              className="text-white hover:underline"
            >
              Sign up now
            </a>
          </div>
        ) : (
          <div className="text-gray-400 mt-8 text-center">
            Already having an account{" "}
            <a
              href="#"
              onClick={() => setIsSignIn(true)}
              className="text-white hover:underline"
            >
              Sign in now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
