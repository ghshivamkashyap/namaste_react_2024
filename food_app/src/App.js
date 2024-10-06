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

  return (
    <div className="flex flex-col">
      {/* <TopNavbar /> */}
      <TopNavbar />
      <MainContainer data={data} />
      <Footer />
    </div>
  );
}

export default App;
