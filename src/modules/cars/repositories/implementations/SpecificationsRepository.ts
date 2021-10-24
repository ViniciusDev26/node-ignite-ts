import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTACE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTACE) {
      SpecificationsRepository.INSTACE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTACE;
  }

  list() {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationsDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
