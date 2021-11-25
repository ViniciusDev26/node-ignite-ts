import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

import { BadRequestError } from "../errors/BadRequestError";
import { UnathorizedError } from "../errors/UnathorizedError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new BadRequestError("JWT token is missing");
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(
      token,
      process.env.JWT_SECRET_KEY
    ) as IPayload;

    const usersRepository = container.resolve(UsersRepository);
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new UnathorizedError("User not found");
    }

    return next();
  } catch (err) {
    throw new UnathorizedError("Invalid JWT token");
  }
}

export { ensureAuthenticated };
