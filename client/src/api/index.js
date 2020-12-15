import axios from "axios";

// Server Url
const url = "https://mern--shopping--list--api.herokuapp.com/items";

// Routes
export const fetchItems = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);
export const updateItem = (id, updatedItem) =>
  axios.patch(`${url}/${id}`, updatedItem);
