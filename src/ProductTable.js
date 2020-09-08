import React from "react";
import { ProductCategory } from "./ProductCategory";
import { ProductRow } from "./ProductRow";

export function ProductTable(props) {
  const { products, filter, stock } = props;

  const regex = new RegExp(filter, "i");
  const elements = [];
  let cat = null;

  products.forEach((product) => {
    const currentCat = product.category;
    if (currentCat !== cat) {
      elements.push(<ProductCategory product={product} key={currentCat} />);
    }
    if (product.name.match(regex) && (stock ? product.stocked : true)) {
      elements.push(<ProductRow product={product} key={product.name} />);
    }
    cat = currentCat;
  });

  return (
    <table className="PTable">
      <thead>
        <tr>
          <th> Name</th>
          <th> Price</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
}
