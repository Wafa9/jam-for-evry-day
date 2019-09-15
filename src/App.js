import React, { Component } from "react";
import Products from "./components/products";
import Basket from "./components/Basket";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };
    this.AddToCart = this.AddToCart.bind(this);
    this.RemoveFromCart = this.RemoveFromCart.bind(this);
  }
  // ##### get data from database & setState

  componentWillMount() {
    fetch("http://localhost:8000/products:")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );

    // if (localStorage.getItem("cartItems")) {
    //   this.setState({
    //     cartItems: JSON.parse(localStorage.getItem("cartّItems"))
    //   });
    // }
  }

  AddToCart(product) {
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
      return cartItems;
    });
  }
  RemoveFromCart(item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
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
        <div className="basket">
          <Basket
            cartItems={this.state.cartItems}
            RemoveFromCart={this.RemoveFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
