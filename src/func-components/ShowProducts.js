import React, { Component } from "react";
import { ShopContext } from "../contexts/ShopContext";

const ShowProducts = () => {
  return (
    <ShopContext.Consumer>
      {(contextData) => {
        const { products, doSome } = contextData;
        console.log(doSome());
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
};

export default ShowProducts;
