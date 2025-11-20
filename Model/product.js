// import products from "./../utils/db.js";
import products from "../utils/db.js";

export async function createProduct(name, price) {
  const { insertedId } = await products.insertOne({
    name,
    price,
  });
  return insertedId;
}
export async function getProduct(name) {
  const result = await products.findOne({ name });
  return result;
}
