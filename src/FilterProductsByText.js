import React from "react";

export function FilterProductsByText(props) {
  return (
    <div className="Search-input">
      <input
        className="box"
        type="search"
        name="search"
        value={props.filter}
        onChange={props.handleChange}
      />
      <div className="box">
        <input
          type="checkbox"
          id="filter"
          value={props.stock}
          onChange={props.handleChecked}
        />
        <label htmlFor="filter">Only show products in stock</label>
      </div>
    </div>
  );
}
