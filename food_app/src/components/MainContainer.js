import React, { useEffect } from "react";
import Card from "./Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { value } from "../constants/constants";
import { Link } from "react-router-dom";

const MainContainer = (data) => {
  useEffect(() => {
    console.log("Props: ", data);
  }, []);

  return (
    <div className="flex gap-x-2">
      {data?.data.length === 0 ? (
        <SkeletonTheme baseColor="#2a2a2a" highlightColor="#444">
          <p>
            <Skeleton height={30} baseColor="pink" count={3} />
          </p>
        </SkeletonTheme>
      ) : (
        <div className="flex justify-evenly w-full">
          {data?.data.map((doc) => (
            <Link key={doc.id} to={`/product/${doc.id}`}>
              {" "}
              <Card data={doc} key={doc.id} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
