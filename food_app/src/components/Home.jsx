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
      <div className="flex gap-x-3">
        <Link to={"/about"}>
          <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 transform hover:scale-105">
            About
          </button>
        </Link>

        <Link to={"/dashboard/ol1"}>
          <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 transform hover:scale-105">
            Dashboard
          </button>
        </Link>

        <Link to={"/class-vs-functionsl-component"}>
          <button class="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 transform hover:scale-105">
            Class vs Functional Component
          </button>
        </Link>
      </div>

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
