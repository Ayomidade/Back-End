import jwt from "jsonwebtoken";

 const Auth = (req, res, next) => {
  try {
    const token = decodeURIComponent(req.header).split(" ")[1];
    console.log(token);
  } catch (error) {
    res.status(403).send({ res: "Session expired , sign in again!" });
  }

};
export default Auth;