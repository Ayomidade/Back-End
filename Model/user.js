import { users } from "../utils/db.js";

export async function createUser(name, email) {
  const response = await users.insertOne({ name, email });
  return response.insertedId;
}

export async function getUser(email) {
  const user = await users.findOne({ email: email });
  return user;
}
