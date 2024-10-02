import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "i_am_id", className: "iAmClasss" },

  "i am h1 dynamic"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
