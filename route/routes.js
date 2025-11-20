import { Router } from "express";
import {
  newProduct,
  newUser,
  searchProduct,
  usersHandler,
} from "../API/handler.js";
import { simpleMiddleWare } from "../middlewares/main.js";

const route = Router();
route.get("/user/", usersHandler);
route.post("/add/new/poduct",   newProduct);
// route.post()

export default route;
