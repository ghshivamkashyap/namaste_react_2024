import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { firebaseAuth } from "../../config/firebase";
import LoaderSpinner from "../common/LoaderSpinner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const confirmPassword = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login called");
    const loadingToastId = toast.loading("Logging in...");
    try {
      const isEmailValid =
        /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
          email.current.value
        );

      if (!isEmailValid || !password.current.value) {
        toast.warning("Enter a valid email address and password");
        return;
      }

      const data = await signInWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      );
      console.log("User data: ", data);

      toast.update(loadingToastId, {
        render: "Logged in successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (e) {
      console.log("Login error: ", e);
      const errorMessage = e.message;

      toast.update(loadingToastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    console.log("rerf data: ", email.current.value, password.current.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let loadingToastId = null;

    try {
      setLoading(true);
      console.log("Signup called");

      const isEmailValid =
        /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
          email.current.value
        );

      if (!isEmailValid) {
        toast.warning("Enter a valid email address");
        return;
      }

      if (
        !email.current.value ||
        !password.current.value ||
        !confirmPassword?.current?.value
      ) {
        toast.warn("Enter a valid email address and password", {
          position: "top-right",
        });
        return;
      }

      if (password.current.value !== confirmPassword.current.value) {
        toast.warning("Password and Confirm Password should be the same");
        return;
      }

      console.log(
        "ref data: ",
        email.current.value,
        password.current.value,
        confirmPassword?.current?.value
      );

      loadingToastId = toast.loading("Creating user...");
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      console.log("New user: ", user);

      email.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";

      toast.update(loadingToastId, {
        render: "User created successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      navigate(`/browse/${user.uid}`);
    } catch (error) {
      const errorMessage = error.message;

      toast.update(loadingToastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

      console.log("Error:", error);
    } finally {
      setLoading(false);
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
          onSubmit={
            !loading ? (isSignIn == true ? handleLogin : handleSignup) : null
          }
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
            {loading ? (
              <div className=" justify-evenly">
                Loading{" "}
                <span>
                  <LoaderSpinner />
                </span>
              </div>
            ) : isSignIn ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
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
