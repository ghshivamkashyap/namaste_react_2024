import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "i_am_id", className: "iAmClasss" },

  "i am h1 dynamic"
);

const jsxHeading = (
  <h1 className="i_am_class_of_jsx">i am jsx heading made using jsx</h1>
);

const nestedData = (
  <div>
    <div>
      <div>hello</div>
    </div>
  </div>
);

const FunctionComponent = () => {
  return <p>i am para from functional component</p>;
};
console.log("nested elements in jsx: ", nestedData);

console.log("jsxHeading: ", jsxHeading);
console.log("heading: ", heading);
console.log("FunctionComponent: ", FunctionComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);
