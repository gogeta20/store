import { LoginPostRepository } from '../../infrastructure/repositories/LoginPostRepository';
import type { User } from "~/src/main/domain/entity/User";

export class LoginPostUseCase {

  async execute(dataSend: User) {
    const loginRepository = new LoginPostRepository();

    this.verifyData(dataSend);

    await loginRepository.send(dataSend);
  }

  private verifyData(dataSend: User) {

    if (!dataSend.user || dataSend.pass) {
      throw new Error('Invalid post data');
    }

  }
}
