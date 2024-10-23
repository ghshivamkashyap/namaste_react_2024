import React, { createContext } from "react";

const UserContext = createContext({
  name: "shivam kashyap",
  isLoggedIn: false,
  theme: "lite",
});

export default UserContext;
