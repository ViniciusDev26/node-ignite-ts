import "reflect-metadata";
import "dotenv/config";
import "@shared/infra/typeorm";
import "@shared/container";

import express from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import { handleErrorsMiddleware } from "@shared/infra/http/middlewares/handleErrorsMiddleware";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(handleErrorsMiddleware);

app.listen(3333, () =>
  console.log("server is running on http://localhost:3333")
);
