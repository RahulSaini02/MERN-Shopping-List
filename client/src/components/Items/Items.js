import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Item from "./Item/Item";
import "./Items.css";

function Items({ setCurrentId }) {
  // constants
  const items = useSelector((state) => state.items);

  return !items.length ? (
    <CircularProgress />
  ) : (
    <div className="items">
      {items.map((item) => (
        <Item key={item._id} item={item} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
}

export default Items;
