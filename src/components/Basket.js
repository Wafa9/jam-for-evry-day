import React, { Component } from "react";

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
                  {item.count}
                  <button onClick={e => this.props.RemoveCart(e, item)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
