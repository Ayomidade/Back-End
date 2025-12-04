import { Router, urlencoded, json } from "express";
import { resolve } from "path";
import {
  allProducts,
  newProduct,
  newUser,
  searchProduct,
  signIn,
  usersHandler,
} from "../API/handler.js";
import { simpleMiddleWare } from "../middlewares/main.js";
import auth from "../middlewares/auth.js";
import rateLimiter from "../middlewares/rateLimiter.js";

const route = Router();
route.get("/user", auth, usersHandler);
route.post("/add/new/poduct", newProduct);
route.post("/sign-in", rateLimiter, signIn);
route.post("/sign-up", newUser);
route.get("/", (req, res) => {
  res.sendFile(resolve("static", "Index.html"));
});

export default route;
