import React, { Children } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((store) => store.user);

  if (user == null) {
    return <Navigate to={"/"} />;
  } else {
    return Children;
  }
};

export default ProtectedRoute;
