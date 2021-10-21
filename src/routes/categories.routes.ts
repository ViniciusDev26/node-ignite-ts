import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json({ allCategories });
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists)
    return response.status(400).json({ error: "Category Already Exists!" });

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
