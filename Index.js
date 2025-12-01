import express, { json } from "express";
import bodyParser from "body-parser";
import route from "./route/routes.js";


export const app = express(); // instance of my express back-end application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(json());
const PORT = 8081;

app.use('/api', route)

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server running on port ${PORT}`);
  throw err;
});
