export const simpleMiddleWare = (req, res, next) => {
  try {
    console.log(
      `hey  a new request just came in at ${new Date().toLocaleString()}`
    );
    next();
  } catch (error) {
    console.log(error);
  }
};
