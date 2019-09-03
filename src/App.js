import React, { Component } from "react";
import Products from "./components/products";
import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItem: [] };
  }
  // ##### get data from database & setstate
  componentWillMount() {
    fetch("http://localhost:8000/products:")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
  }
  AddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems };
    });
  }
  RemoveCart(item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>jam for every day</h1>
        <hr />
        {/* ###### Product Component */}
        <div>
          <Products
            products={this.state.filteredProducts}
            AddToCart={this.AddToCart}
          />
        </div>
        {/* ################ Basket Component */}
        <div>
          <Basket
            cartItem={this.state.cartItem}
            RemoveFromCart={this.RemoveCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
