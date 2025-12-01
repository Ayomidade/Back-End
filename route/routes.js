import { Router } from "express";
import {
  newProduct,
  newUser,
  searchProduct,
  usersHandler,
} from "../API/handler.js";
import { simpleMiddleWare } from "../middlewares/main.js";
import auth from "../middlewares/auth.js";

const route = Router();
route.get("/user", auth, usersHandler);
route.post("/add/new/poduct", newProduct);
// route.post()

export default route;
