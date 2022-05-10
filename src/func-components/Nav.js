import React, { Component, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

// class Nav extends Component {
//   static contextType = ShopContext;
//   render() {
//     const { products } = this.context;
//     return (
//       <div>
//         <h1>We have {products.length} in our store</h1>
//       </div>
//     );
//   }
// }

const Nav = () => {
  const myProducts = useContext(ShopContext);
  const { products } = myProducts;
  return (
    <div>
      <h1>We have {products.length} products in our store</h1>
    </div>
  );
};

export default Nav;
