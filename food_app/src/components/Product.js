import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let data = useParams();
  console.log("Data parama: ", data);
  return <div>i am single product page of id {data.id}</div>;
};

export default Product;
