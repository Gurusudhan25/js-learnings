import express from "express";
import { header } from "express-validator";

const app = express();

//app.disable hides the required header from the hacker
app.disable("x-powered-by");
app.disable("etag");

app.get("/", (req, res) => {
  res.send("reached");
});

app.listen(8000);
