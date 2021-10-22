import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
