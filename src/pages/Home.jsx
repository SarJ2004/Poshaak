import React, { useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner />
      <Products products={data} />
    </div>
  );
}

export default Home;
