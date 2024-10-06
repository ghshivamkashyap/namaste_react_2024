import React, { useEffect } from "react";
import Card from "./Card";
import { value } from "../constants/constants";

const MainContainer = (data) => {
  useEffect(() => {
    console.log("Props: ", data);
  }, []);
  return (
    <div className=" flex gap-x-2" style={{ backgroundColor: "pink" }}>
      {data?.data.length == 0 ? (
        <p>
          Loading...
          {value}
        </p>
      ) : (
        <div className=" flex justify-evenly w-full">
          {data?.data.map((doc) => (
            <Card data={doc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
