import React, { useContext } from "react";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../context_api/userContext";
import { useSelector } from "react-redux";

export const TopNavbar = () => {
  const cart = useSelector((store) => store.cart.items);
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
      <Link to={"/cart"}>
        <li>Cart({cart.length ? cart.length : 0} items)</li>
      </Link>
    </ul>
  );
};

// export default TopNavbar;
