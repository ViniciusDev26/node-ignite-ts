import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json({ allCategories });
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRoutes };
