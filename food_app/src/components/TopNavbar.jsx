import React, { useContext } from "react";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../context_api/userContext";

export const TopNavbar = () => {
  const status = useOnlineStatus();
  const userContextData = useContext(UserContext);

  const updateTheme = (val) => {
    console.log("checked: ", val);
    userContextData.setTheme(val == true ? "dark" : "lite");
  };
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
      <li>Theme: {userContextData?.theme}</li>
      <li>
        <input
          type="checkbox"
          onChange={(val) => updateTheme(val.target.checked)}
        ></input>
      </li>
    </ul>
  );
};

// export default TopNavbar;
