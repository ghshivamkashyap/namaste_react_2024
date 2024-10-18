import { lazy, Suspense, useEffect, useState } from "react";
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
// import About from "./components/About";

import Home from "./components/Home";
import Error from "./components/Error";
// import Dashboard from "./components/dashboard/Dashboard";
import Outlet1 from "./components/dashboard/Outlet1";
import Outlet2 from "./components/dashboard/Outlet2";
import Product from "./components/Product";
import ClassVsFunctionslComponent from "./components/ClassVsFunctionslComponent";
// import TopNavbar from "./components/TopNavbar";
const About = lazy(() => import("./components/About"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/class-vs-functionsl-component"
          element={<ClassVsFunctionslComponent />}
        />

        {/* nexted routing for sidebars  */}
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route path="/dashboard/ol1" element={<Outlet1 />} />
          <Route path="/dashboard/ol2" element={<Outlet2 />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
