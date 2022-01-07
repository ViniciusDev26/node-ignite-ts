import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject(UsersRepository)
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatarFile }: IRequest) {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);
    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
