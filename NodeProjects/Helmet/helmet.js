import express from "express";
// import * as helmet from "helmet";
import helmet from "helmet";
const app = express();
app.use(helmet());

//helmet inbuilts
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.crossOriginEmbedderPolicy());
// app.use(helmet.crossOriginOpenerPolicy());
// app.use(helmet.crossOriginResourcePolicy());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.originAgentCluster());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());

app.get("/", (req, res) => {
  res.send(req.headers);
});

// app.post("/", (req, res) => {
//   res.send(req.headers);
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`${PORT}`);
// });
app.listen(8080, () => {
  console.log("Hello");
});
