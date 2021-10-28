import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
  async handle(request: Request, response: Response) {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationsUseCase
    );

    const specifications = await listSpecificationUseCase.execute();

    response.json(specifications);
  }
}

export { ListSpecificationController };
