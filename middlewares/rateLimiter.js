import erl from "express-rate-limit";

const rateLimiter = erl({
  windowMs: 5 * 60 * 1000,
  //   message: "You have tried multiple times, wait till the next 5 minutes",
  limit: 2,
  handler: (req, res, next) => {
    try {
      res.status(429).send({ msg: "Too many attempts, try aagain !!" });
    } catch (error) {
      console.log(error);
    }
  },
});

export default rateLimiter;
