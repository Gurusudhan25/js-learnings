//Importing required modules
import { transports, format } from "winston";
import expresswinston from "express-winston";
import express from "express";

const app = express();

app.use(
  expresswinston.logger({
    transports: [
      new transports.File({
        level: "warn",
        filename: "warning.log",
      }),
      new transports.File({
        level: "error",
        filename: "error.log",
      }),
      new transports.File({
        level: "info",
        filename: "info.log",
      }),
    ],
    format: format.combine(
      format.json(),
      format.timestamp(),
      format.prettyPrint()
    ),
    statusLevels: true,
  })
);

//controllers
const getHome = (req, res) => {
  res.sendStatus(200);
};
const errPage = (req, res) => {
  res.sendStatus(500);
};
const warnPage = (req, res) => {
  res.sendStatus(400);
};

app.get("/", getHome);
app.get("/error", errPage);
app.get("/warn", warnPage);
app.listen(8000);
