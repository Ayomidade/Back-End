import express, { json, urlencoded } from "express";
import route from "./route/routes.js";

export const app = express(); // instance of my express back-end application
app.use(urlencoded({ extended: true }));
app.use(json());
const PORT = 8081;

app.use("/api", route);

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server running on port ${PORT}`);
  throw err;
});
