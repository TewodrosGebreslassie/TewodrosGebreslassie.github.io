import React from "react";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";

export default function List() {
  return (
    <ul className="todo-main">
      <li>
        <Item />
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>yyyy</span>
        </label>
      </li>
    </ul>
  );
}
