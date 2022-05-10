import React, { Component } from "react";
import { ShopContext } from "../contexts/ShopContext";

class ShowProducts extends Component {
  // static contextType = ShopContext;
  render() {
    // console.log(this.context);
    // const { products } = this.context;

    return (
      <ShopContext.Consumer>
        {(contextData) => {
          const { products } = contextData;
          return (
            <div>
              <h1>All Products</h1>
              {products.map((product) => (
                <div key={product.id}>
                  <h3>Name: {product.name}</h3>
                  <h4>Price: {product.price}</h4>
                </div>
              ))}
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default ShowProducts;
