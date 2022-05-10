import React, { Component, createContext } from "react";

export const ShopContext = createContext();

class ShopContextProvider extends Component {
  state = {
    products: [
      { id: 1, name: "Laptop", price: 600 },
      { id: 2, name: "Mobile", price: 400 },
      { id: 3, name: "HP Computer", price: 500 },
      { id: 4, name: "iPhone", price: 800 },
      { id: 5, name: "Watch", price: 100 },
    ],
  };

  doSomething = () => {
    return "Please do something my dear!!!";
  };

  render() {
    return (
      <ShopContext.Provider value={{ ...this.state, doSome: this.doSomething }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopContextProvider;
