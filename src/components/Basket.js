import React, { Component } from "react";
// import util from "../util";
export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You have {cartItems.length} products in the basket</div>
        )}

        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li>
                  <b>{item.name}</b>
                  {item.count} ={item.price * item.count}
                  <button onClick={() => this.props.RemoveFromCart(item)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            Total:
            {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            <button onClick={() => alert("Checkout needs to implement....")}>
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
// {
//   util.FormattedNumber(
//     cartItems.reduce((a, c) => a + c.price * c.count, 0)
//   )
// }
