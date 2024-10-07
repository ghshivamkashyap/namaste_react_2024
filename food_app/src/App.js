import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

// 2 types of impoprts below

// export default MainContainer
import MainContainer from "./components/MainContainer";

// export const TopNavbar =()=>{}
import { TopNavbar } from "./components/TopNavbar";
// import TopNavbar from "./components/TopNavbar";

function App() {
  const [data, setData] = useState([]);

  const filterData = (data) => {
    let filtredData = data?.length
      ? data.filter((val) => val?.rating?.rate > 3)
      : [];
    console.log("Filterdata: ", filtredData);
    setData(filtredData);
  };
  useEffect(() => {
    let res = async () => {
      let data = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );

      let jsonData = await data.json();

      setData(jsonData);
    };

    res();
  }, []);
console.log("Dom: ", <MainContainer/>);

  return (
    <div className="flex flex-col">
      {/* <TopNavbar /> */}
      <TopNavbar />
      <MainContainer data={data} />
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
