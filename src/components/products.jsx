import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {this.state.products.map((product) => (
              <li className="list-group-item" key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Products;
