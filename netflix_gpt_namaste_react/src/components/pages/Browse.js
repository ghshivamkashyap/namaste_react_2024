import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Browse = () => {
  const params = useParams();
  useState(() => {
    console.log("Browse page: ", params);
  }, []);
  return <div>browse page</div>;
};

export default Browse;
