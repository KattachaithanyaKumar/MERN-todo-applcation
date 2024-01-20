import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Todo = model("Todo", todoSchema);

export default Todo;
