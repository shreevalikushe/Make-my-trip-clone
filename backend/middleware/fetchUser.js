var jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  //Get the user from jwt token and add id to req object
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate first" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).send({ error: "Please authenticate first" });
  }
};

module.exports = fetchUser;
