import React from "react";
import ClassComp from "./class_and_functionsl_component/ClassComp";
import FunctionComp from "./class_and_functionsl_component/FunctionComp";

const ClassVsFunctionslComponent = () => {
  return (
    <div>
      <ClassComp data={"class component Propsdata"} />
      <FunctionComp data={"functional component Propsdata"} />
    </div>
  );
};

export default ClassVsFunctionslComponent;
