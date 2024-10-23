import React from "react";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { Link } from "react-router-dom";

export const TopNavbar = () => {
  const status = useOnlineStatus();
  return (
    <ul className=" flex gap-x-5 ">
      <div
        class={`h-3 w-3 ${
          status == true ? "bg-green-500" : "bg-red-500"
        } rounded-full mt-2 ml-2`}
      ></div>
      <Link to={"/"}>
        {" "}
        <li>Home</li>
      </Link>

     
    </ul>
  );
};

// export default TopNavbar;
