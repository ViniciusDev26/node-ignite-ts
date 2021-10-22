import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  list(): Specification[];
  create({ name, description }: ICreateSpecificationsDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
