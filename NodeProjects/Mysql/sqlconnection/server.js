import express from "express";
import { insert, getList } from "./controls.js";
const app = express();

app.use(express.json());
app.listen(8000);

app.get("/", getList);
app.post("/", insert);
