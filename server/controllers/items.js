import mongoose from "mongoose";
import ItemMessage from "../models/itemMessage.js";

// Action Controllers
export const getItems = async (req, res) => {
  try {
    const items = await ItemMessage.find();

    res.status(200).json(items);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};

export const getItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await ItemMessage.findById(id);

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { name, quantity } = req.body;
  const newItem = new ItemMessage({ name, quantity });
  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch {
    res.status(409).json({ msg: e.message });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that id");

  const updatedItem = { name, quantity, _id: id };

  await ItemMessage.findByIdAndUpdate(id, updatedItem, { new: true });

  res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post with that id");
  await ItemMessage.findByIdAndRemove(id);

  res.status(200).json({ message: "Delete Success" });
};
