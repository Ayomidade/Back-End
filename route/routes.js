import { Router, urlencoded, json } from "express";
import {
  allProducts,
  newProduct,
  newUser,
  searchProduct,
  usersHandler,
} from "../API/handler.js";
// import { simpleMiddleWare } from "../middlewares/main.js";

const route = Router();
route.get("/user/", usersHandler);
route.post("/add/new/poduct", newProduct);
route.get("/products", allProducts);
// route.post()

export default route;
