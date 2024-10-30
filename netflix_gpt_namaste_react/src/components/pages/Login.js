import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { firebaseAuth } from "../../config/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);

  const confirmPassword = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // toast.error("Wow so easy!");
    // toast("Default Notification !");
    console.log("Login called");

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
      email.current.value
    );

    if (
      !isEmailValid ||
      !password.current.value ||
      !confirmPassword?.current?.value
    ) {
      toast.warning("Enter a valid email address and password");
      return;
    }

    if (password.current.value !== confirmPassword.current.value) {
      toast.error("Password and Confirm Password should be same");
      return;
    }
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

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup called");

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      email.current.value
    );

    if (!isEmailValid) {
      toast.warning("Enter a valid email address");
      return;
    }

    if (password.current.value !== confirmPassword.current.value) {
      toast.warning("Password and Confirm Password should be the same");
      return;
    }

    isEmailValid
      ? console.log("Email is valid")
      : console.log("Email is not valid");

    console.log(
      "ref data: ",
      email.current.value,
      password.current.value,
      confirmPassword?.current?.value
    );

    // Show loading toast
    const loadingToastId = toast.loading("Creating user...");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      console.log("New user: ", user);

      // Update toast with success message
      toast.update(loadingToastId, {
        render: "User created successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      const errorMessage = error.message;

      // Update toast with error message
      toast.update(loadingToastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      console.log("Error:", error);
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgdcxdajg/image/upload/v1730048587/netflix_background_zvdmqr.jpg')`,
      }}
    >
      <ToastContainer />
      <div className="bg-black bg-opacity-65 p-10 rounded-lg w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          {isSignIn ? <>Sign in</> : <>Sign up</>}
        </h2>
        <form
          onSubmit={isSignIn == true ? handleLogin : handleSignup}
          className="flex flex-col space-y-4"
        >
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
          <a
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}
            href="#"
            className="hover:underline"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
