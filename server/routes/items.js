import { Router } from "express";
import auth from "../middleware/auth.js";

// Controlers
import {
  getItems,
  createItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";

const itemRouter = Router();

// Routes
itemRouter.get("/", getItems);
itemRouter.post("/", auth, createItem);
itemRouter.patch("/:id", auth, updateItem);
itemRouter.delete("/:id", auth, deleteItem);
export default itemRouter;
