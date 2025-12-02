import jwt from "jsonwebtoken";

const Auth = (req, res, next) => {
  const token = decodeURIComponent(req.header("Authorization")).split(" ")[1];
  try {
    if (!token) {
      return res
        .status(401)
        .send({ message: "Token is missing, sign in again!! " });
    } else {
      const user = jwt.verify(token, "secret");
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(403).send({ res: "Session expired, sign in again!" });
  }
};
export default Auth;
