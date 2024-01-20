import { Router } from "express";
import Item from "../Model/todoItem.js";

const itemRoute = new Router();

//get all the items
itemRoute.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//get an item
itemRoute.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//create an item
itemRoute.post("/", async (req, res) => {
  try {
    if (req.body) {
      const item = new Item({
        content: req.body.content,
        completed: false,
      });
      await item.save();
      res.status(200).json({ messgae: "created an item: ", data: item });
    }
  } catch (err) {
    console.log(err);
  }
});

//update an item
itemRoute.put("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      item.completed = !item.completed;
      await item.save();
      res.status(200).json({ messgae: "updated an item: ", data: item });
    } else {
      res.status(404).json({ messgae: "item not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

//delete an item
itemRoute.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Item.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Deleted an item", data: item });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
export default itemRoute;
