import { AlreadyExistsError } from "@errors/AlreadyExistsError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("create a new category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const name = "Category 1";
    const description = "Category 1 description";

    await createCategoryUseCase.execute({
      name,
      description,
    });

    const createdCategory = await categoriesRepositoryInMemory.findByName(
      "Category 1"
    );

    expect(createdCategory).toHaveProperty("id");
  });

  it("should not be able to create a new category with name already exists", async () => {
    expect(async () => {
      const name = "Category 1";
      const description = "Category 1 description";

      await createCategoryUseCase.execute({
        name,
        description,
      });

      await createCategoryUseCase.execute({
        name,
        description,
      });
    }).rejects.toBeInstanceOf(AlreadyExistsError);
  });
});
