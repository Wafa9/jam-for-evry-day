import React, { Component } from "react";

class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div>
        <a href={`#${product.id}`} onClick={this.props.AddToCart}>
          <img
            src={`/products/${product.name}.jpg`}
            alt={product.name}
            width="100"
          />
          <p>{product.name}</p>
        </a>
        <div>
          <p>{product.price}</p>
          <button onClick={e => this.props.AddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    ));
    return <div>{productItems}</div>;
  }
}

export default Products;