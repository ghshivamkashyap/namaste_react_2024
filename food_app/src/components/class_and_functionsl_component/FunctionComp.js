import React from "react";

const FunctionComp = (props) => {
  return (
    <div className="bg-slate-700 text-white  w-52 h-52">
      i am functionsl component{" "}
      <span className="  bg-slate-400">{props?.data}</span>
    </div>
  );
};

export default FunctionComp;
