import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}
  async handle(request: Request, response: Response) {
    const specifications = await this.listSpecificationUseCase.execute();

    response.json(specifications);
  }
}

export { ListSpecificationController };
