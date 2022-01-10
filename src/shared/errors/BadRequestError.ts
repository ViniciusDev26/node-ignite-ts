import { AppError } from "./AppError";

class BadRequestError extends AppError {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message, 400);
  }
}

export { BadRequestError };
