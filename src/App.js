import "./App.css";
import React from "react";
// import Languages from "./components/Languages";
import ShopContextProvider from "./contexts/ShopContext";
import ShowProducts from "./components/ShowProducts";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container mt-5">
      {/* <h1>Context API & Hooks</h1> */}
      {/* <Languages /> */}
      <ShopContextProvider>
        <Nav />
        <ShowProducts />
      </ShopContextProvider>
    </div>
  );
}

export default App;
