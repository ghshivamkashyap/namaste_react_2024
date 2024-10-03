import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "i_am_id", className: "iAmClasss" },

  "i am h1 dynamic"
);

const jsxHeading = <h1 className="i_am_class_of_jsx">i am jsx heading made using jsx</h1>;

console.log("jsxHeading: ", jsxHeading);
console.log("heading: ", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
