import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
const client = new MongoClient(process.env.MONGO_URL);
// let products = client.db("Samsam").collection("users");

let Samsam = client.db("Samsam");
let products = Samsam.collection("products");
export const  users = Samsam.collection("users");
export default products;
// exports.db = client.db("Samuel App");
