import "./App.css";
import React from "react";
// import Languages from "./func-components/Languages";
import ShopContextProvider from "./contexts/ShopContext";
import ShowProducts from "./func-components/ShowProducts";
import Nav from "./func-components/Nav";

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
