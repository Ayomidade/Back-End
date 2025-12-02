import express, { json, urlencoded } from "express";
import route from "./route/routes.js";
import cors from "cors";

export const app = express(); // instance of my express back-end application
app.use(urlencoded({ extended: true }));
app.use(json());
const PORT = 8081;

app.use(cors({optionsSuccessStatus: 200, origin: "*", credentials: "include"}))
app.use("/api", route);

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server running on port ${PORT}`);
  throw err;
});
