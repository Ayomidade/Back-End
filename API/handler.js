import { createProduct, getProduct } from "../Model/product.js";
import { createUser } from "../Model/user.js";
import products from "../utils/db.js";

export const usersHandler = (req, res) => {
  try {
    res.status(200).send({ res: { username: "John doe", id: 1 } });
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
  try {
    const insertedId = await createUser(userName, email);
    if (insertedId) {
      res.status(200).send({ res: "User account created successfully" });
    }
  } catch (error) {
    res.status(500).send({ res: "Internal server error" });
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
