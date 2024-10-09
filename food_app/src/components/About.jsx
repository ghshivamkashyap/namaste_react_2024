import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" flex flex-col">
      i am about page
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default About;
