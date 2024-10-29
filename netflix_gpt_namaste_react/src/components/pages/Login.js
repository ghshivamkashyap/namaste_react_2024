import React, { useRef, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login called");

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
      "sk7762415@gmail.co.m"
    );
    isEmailValid
      ? console.log("Email is valid")
      : console.log("Email is not valid");

    console.log(
      "rerf data: ",
      email.current.value,
      password.current.value,
      confirmPassword?.current?.value
      
    );
  };
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
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {!isSignIn && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Confirm password"
              className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
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
      </div>
    </div>
  );
};

export default Login;
