import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
const port = process.env.port || 8000;
app.use(express.json());
app.get("", (req, res) => { 1
  res.send("Welcome");
});

app.post(
  "/",
  [body("username").trim().isLength(6).withMessage("To short name")],
  (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      res.json(error);
    } else res.send("Successfull");
  }
);

app.listen(port);
