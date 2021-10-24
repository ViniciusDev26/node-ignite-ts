import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute() {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
