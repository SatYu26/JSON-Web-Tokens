const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide Email and Password", 400);
  }
  // console.log(username, password);
  res.send("Fake login/Register/SignUp Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
