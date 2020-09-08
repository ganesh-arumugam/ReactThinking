import React from "react";
import "./styles.css";
import { FilterProductsByText } from "./FilterProductsByText";
import { ProductTable } from "./ProductTable";

export default function App() {
  const [text, setText] = React.useState("");
  const [stock, setStock] = React.useState(false);

  const handleChange = (event) => {
    console.log("Change is ", event.target.value);
    return setText(event.target.value);
  };

  const handleChecked = (event) => {
    return setStock(event.target.checked);
  };

  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];

  return (
    <div className="App">
      <h1>Thinking in React</h1>
      <FilterProductsByText
        filter={text}
        handleChange={handleChange}
        stock={stock}
        handleChecked={handleChecked}
      />
      <ProductTable products={products} filter={text} stock={stock} />
    </div>
  );
}
