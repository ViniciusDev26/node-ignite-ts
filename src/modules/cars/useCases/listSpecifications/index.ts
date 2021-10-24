import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export default () => {
  const specificationsRepository = new SpecificationsRepository();
  const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationsRepository
  );
  const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
  );

  return listSpecificationController;
};
