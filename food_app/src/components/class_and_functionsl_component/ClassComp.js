import React, { Component } from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    console.log("Class component props: ", props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="  bg-blue-800 text-white w-52 h-52">
          i am class component{" "}
          <span className="  bg-slate-400">{this.props?.data}</span>
        </div>
        <p>{this.state.count+1}</p>
      </>
    );
  }
}

export default ClassComp;
