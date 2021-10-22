import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ message: name });
});

app.listen(3333, () =>
  console.log("server is running on http://localhost:3333")
);
