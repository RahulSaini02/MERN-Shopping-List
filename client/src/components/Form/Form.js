import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createItem, updateItem } from "../../actions/itemAction";
import "./Form.css";

function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();

  // useStates
  const [itemData, setItemData] = useState({
    name: "",
    quantity: 1,
  });

  // useEffects
  const item = useSelector((state) =>
    currentId ? state.items.find((message) => message._id === currentId) : null
  );
  useEffect(() => {
    if (item) setItemData(item);
  }, [item]);

  // Functions
  const clear = () => {
    setCurrentId(0);
    setItemData({ name: "", quantity: 1 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createItem(itemData));
      clear();
    } else {
      dispatch(updateItem(currentId, itemData));
      clear();
    }
  };

  return (
    <div className="form__container">
      <form
        action=""
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Add Grocery..."
          autoFocus
          value={itemData.name}
          onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={itemData.quantity}
          onChange={(e) =>
            setItemData({ ...itemData, quantity: e.target.value })
          }
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
