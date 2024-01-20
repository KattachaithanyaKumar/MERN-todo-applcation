import { Schema, model } from "mongoose";

const itemSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Item = model("Item", itemSchema);

export default Item;