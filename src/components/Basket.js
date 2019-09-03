import React, { Component } from "react";
import { isTemplateElement } from "@babel/types";

export default class Basket extends Component {
  render() {
    const cartItems = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <p>Basket is empty"</p>
        ) : (
          <p>You have {cartItems.length} products in the basket</p>
        )}
        {cartItems.length > 0 && (
          <ul>
            {cartItems.map(item => (
              <li>
                <b>{isTemplateElement.name}</b>X{item.count}
                <button onClick={e => this.props.RemoveCart(e, item)}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
