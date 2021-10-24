import "reflect-metadata";
import "./database";
import "./shared/container";

import express from "express";
import swaggerUI from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () =>
  console.log("server is running on http://localhost:3333")
);
