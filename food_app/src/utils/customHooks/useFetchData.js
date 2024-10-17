import React, { useEffect, useState } from "react";

const useFetchData = () => {
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
  return data;
};

export default useFetchData;
