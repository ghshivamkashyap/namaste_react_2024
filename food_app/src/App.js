import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import TopNavbar from "./components/TopNavbar";

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
      <TopNavbar />
      <MainContainer data={data} />
      <Footer />
    </div>
  );
}

export default App;
