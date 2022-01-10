import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
