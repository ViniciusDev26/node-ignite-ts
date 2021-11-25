import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUseUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUseUseCase);
    const authenticateInfo = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}

export { AuthenticateUserController };
