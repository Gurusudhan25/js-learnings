import express from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.SECRET_KEY);
const app = express();
app.use(express.json());

const secretKey = process.env.SECRET_KEY;

//Controllers
const tokenResponse = (req, res) => {
  const token = jwt.sign(req.body, secretKey);
  res.send(token);
};
const getUser = (req, res) => {
  const tokenew = req.headers["authorization"];
  try {
    const decoded = jwt.verify(tokenew, secretKey);
    res.send(decoded);
  } catch (err) {
    res.send("Invalid token.");
  }
};

//routes
app.get("/", getUser);
app.post("/", tokenResponse);
app.listen(8000);
