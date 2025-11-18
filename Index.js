import express from "express";
import { simpleMiddleWare } from "./middlewares/main.js";
import { createProduct } from "./Model/product.js";

const app = express(); // instance of my express back-end application

const PORT = 8081;

// app.use(simpleMiddleWare);

app.get("/api/users", simpleMiddleWare, (req, res) => {
  try {
    res.status(200).send({ res: { username: "John doe", id: 1 } });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/new/products", async (req, res) => {
  try {
    const response = await createProduct("Moimoi", 2000);
    if (response) {
      res.status(200).send({ res: "Product successfully added" });
    }
  } catch (error) {
    res.status(500).send({ res: "Internal server error" });
  }
});

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server running on port ${PORT}`);
  throw err;
});
