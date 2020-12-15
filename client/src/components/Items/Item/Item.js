import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { useDispatch } from "react-redux";
import { deleteItem } from "../../../actions/itemAction";
import "./Item.css";

function Item({ item, setCurrentId }) {
  const dispatch = useDispatch();

  // Functions
  const deleteHandler = () => {
    const id = item._id;
    console.log(id);
    dispatch(deleteItem(id));
  };

  return (
    <div className="item">
      <p>{`${item.name} (${item.quantity})`} </p>
      <div className="task__btn">
        <button className="edit" onClick={() => setCurrentId(item._id)}>
          <EditIcon />
        </button>
        <button className="delete" onClick={deleteHandler}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Item;
