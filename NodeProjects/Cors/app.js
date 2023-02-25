//CORS => Cross Origin Resource Sharing

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { getcors, getConstCor } = require("./cors");
const app = express();

app.use(helmet());
app.use(cors(getcors));

app.get("/", (req, res) => {
  //Here it listens to port 3000
});

app.get("/user", cors(getConstCor), (req, res) => {
  //here the browser listens to port 6000 as new cors is applied here
  res.send("Reached to user page");
});

app.listen(8000, () => {
  console.log("Succesfully running ");
});
