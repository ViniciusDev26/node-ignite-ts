import express from "express";

const app = express();

app.use(express.json());

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ message: name });
});

app.listen(3333, () =>
  console.log("server is running on http://localhost:3333")
);
