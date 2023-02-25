import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

//Get Methodnod
app.get("/", (req, res) => {
  res.send("Hello from Backend page");
});

app.listen(PORT);
