import { AppError } from "./AppError";

class AlreadyExistsError extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}

export { AlreadyExistsError };
