import { useState } from "react";
import useFetchData from "./components/FetchData";

import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Outlet } from "react-router-dom";

function App() {
  const { products, error } = useFetchData();
  console.log(products);
  console.log(error);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
