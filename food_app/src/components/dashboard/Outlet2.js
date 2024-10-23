import React, { useContext } from "react";
import UserContext from "../../context_api/userContext";

const Outlet2 = () => {
  const contextData = useContext(UserContext);
  console.log("Context data un t2: ", contextData);

  return <div className=" bg-yellow-400"> theme is: {contextData?.theme}</div>;
};

export default Outlet2;
