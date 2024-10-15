import React from "react";
import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const filterData = (data) => {
    let filtredData = data?.length
      ? data.filter((val) => val?.rating?.rate > 3)
      : [];
    console.log("Filterdata: ", filtredData);
    setData(filtredData);
  };
  const searchData = (e) => {
    console.log("Val of e is: ", e);
    setData(originalData);
    if (e === "") {
      return;
    }
    // return;
    let filtredData = data?.length
      ? data.filter((val) =>
          val?.title?.toLowerCase().includes(e.toLowerCase())
        )
      : [];
    console.log("searched data: ", filtredData);
    setData(filtredData);
  };
  console.log("before use effect");
  useEffect(() => {
    console.log("inside use effect");

    let res = async () => {
      let data = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );

      let jsonData = await data.json();
      setOriginalData(jsonData);
      setData(jsonData);
    };

    res();
  }, []);
  console.log("after use effect");
  return (
    <div className=" flex flex-col">
      <input
        type="text"
        onChange={(e) => {
          searchData(e.target.value);
        }}
      />
      <Link to={"/about"}>About</Link>
      <Link to={"/dashboard/ol1"}>Dashboard</Link>
      <Link to={"/class-vs-functionsl-component"}>
        Class vs functionsl component
      </Link>

      <MainContainer data={data} />
      <button
        className=" bg-green-700 w-[200px] rounded-md h-[50px] font-semibold text-white"
        onClick={() => filterData(data)}
      >
        Filter data
      </button>
    </div>
  );
};

export default Home;
