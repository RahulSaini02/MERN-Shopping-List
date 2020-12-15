import mongoose from "mongoose";

// Item Schema
const ItemSchema = mongoose.Schema({
  name: String,
  quantity: Number,
});

const ItemMessage = mongoose.model("ItemMessage", ItemSchema);
export default ItemMessage;
