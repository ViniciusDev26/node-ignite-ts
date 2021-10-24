import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async list() {
    const specifications = await this.repository.find();

    return specifications;
  }

  async create({ name, description }: ICreateSpecificationsDTO) {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string) {
    const specification = await this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
