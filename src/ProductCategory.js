import React from "react";

export function ProductCategory(props) {
  const { product } = props;

  return (
    <tr colSpan="2">
      <th> {product.category}</th>
    </tr>
  );
}
