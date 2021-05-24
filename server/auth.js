require("dotenv").config();
const { sign } = require("jsonwebtoken");

const createAccessToken = (Customer) => {
  return sign({ userId: Customer.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const createRefeshToken = (Customer) => {
  return sign(
    { userId: Customer.id, tokenVersion: Customer.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
module.exports = { createAccessToken, createRefeshToken };
