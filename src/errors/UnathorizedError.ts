import { AppError } from "./AppError";

class UnathorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}

export { UnathorizedError };
