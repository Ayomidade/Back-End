import { createProduct, getProduct } from "../Model/product.js";
import { createUser, getUser } from "../Model/user.js";
import products from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const usersHandler = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await getUser(email);
    // console.log(object);
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
  }
};

export const newProduct = async (req, res) => {
  try {
    const response = await createProduct("Moimoi", 2000);
    if (response) {
      res.status(200).send({ res: "Product successfully added" });
    }
  } catch (error) {
    res.status(500).send({ res: "Internal server error" });
  }
};

export const searchProduct = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    const product = await getProduct(name);
    if (product) {
      res.status(200).send({ product });
    } else res.status(404).send({ res: "Product not found" });
  } catch (error) {
    res.status(500).send({ res: "Internal server error" });
  }
};

export const newUser = async (req, res) => {
  const { userName, email } = req.body;
  let saltRounds = 10;
  const hashedPasssord = await bcrypt.hash(userName, saltRounds);
  // console.log(hashedPasssord);
  try {
    const insertedId = await createUser(hashedPasssord, email);
    if (insertedId) {
      res.status(200).send({ res: "User account created successfully" });
    }
  } catch (error) {
    res.status(500).send({ res: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  const { email, name } = req.body;
  const result = await getUser(email);

  try {
    if (result) {
      const isMatched = await bcrypt.compare(name, result.name);

      if (isMatched) {
        const token = jwt.sign({ email }, "secret", { expiresIn: "5min" });
        res.status(201).send({ message: `Welcome back, ${email}`, token });
      } else {
        res.status(403).send({ message: "Incorrect credentials" });
      }
    } else {
      res.status(404).send({ message: "Account not found, sign up!" });
    }
  } catch (error) {
    res.status(503).send({ res: "Connection error/ Service Unavailable" });
  }
};

export const allProducts = async (req, res) => {
  try {
    const products = products.find({}).toArray();
    console.log(products);
  } catch (error) {
    res.status(500).send({ res: "Internal Server Error" });
  }
};

// export async function newUser(req, res)  {
//   const { userName, email } = req.body;
//   try {
//     const insertedId = await createUser(userName, email);
//     if (insertedId) {
//       res.status(200).send({ res: "User account created successfully" });
//     }
//   } catch (error) {
//     res.status(500).send({ res: "Internal server error" });
//   }
// };
