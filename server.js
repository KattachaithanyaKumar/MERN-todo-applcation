import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//constants
const uri =
  "mongodb+srv://kattachaithanyak:erX581obQYNRxyD0@cluster0.tv9c6c7.mongodb.net/items-collection?retryWrites=true&w=majority";
const PORT = 3000;

//import routes
import itemRoute from "./Routes/itemRoute.js";

const app = new express();

app.use(express.json());
app.use(cors());

//default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/item", itemRoute);

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));
