import React, { Component } from "react";
import util from "./util";
class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div>
        <a
          className="isDisabled"
          href={`#${product.id}`}
          onClick={this.props.AddToCart}
        >
          <img
            src={`/products/${product.name}.png`}
            alt={product.name}
            width="100"
          />
          <p>{product.name}</p>
        </a>
        <div>
          <p>{util.formatCurrency(product.price)}</p>

          <button onClick={() => this.props.AddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    ));
    return <div>{productItems}</div>;
  }
}

export default Products;
