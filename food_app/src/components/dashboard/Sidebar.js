import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" flex flex-col  bg-gray-500">
         <Link to="/">Home</Link>
      <Link to="/dashboard/ol1">Outlet 1</Link>
      <Link to="/dashboard/ol2">Outlet 2</Link>
    </div>
  );
};

export default Sidebar;
