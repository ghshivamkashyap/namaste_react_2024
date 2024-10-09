import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, useNavigate } from "react-router-dom";
// 2 types of impoprts below

// export default MainContainer
import MainContainer from "./components/MainContainer";

// export const TopNavbar =()=>{}
import { TopNavbar } from "./components/TopNavbar";
import About from "./components/About";
// import TopNavbar from "./components/TopNavbar";

function App() {
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

  console.log("Dom: ", <MainContainer />);

  return (
    <div className="flex flex-col">
      {/* <TopNavbar /> */}
      <TopNavbar />
      <input
        type="text"
        onChange={(e) => {
          searchData(e.target.value);
        }}
      />
      <Routes>
        <Route path="/" element={<MainContainer data={data} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <button
        onClick={() => filterData(data)}
        className=" bg-blue-600 text-white w-[250px]"
      >
        Filter data
      </button>
      <Footer />
    </div>
  );
}

export default App;
