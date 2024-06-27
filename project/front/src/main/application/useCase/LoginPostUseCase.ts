import { LoginPostRepository } from '../../infrastructure/repositories/LoginPostRepository';
import type { User } from "@/main/domain/entity/User";
import { userAppStore } from '~/stores/user';
const userStore = userAppStore();

export class LoginPostUseCase {

  async execute(dataSend: User) {
    this.verifyData(dataSend);

    const loginRepository = new LoginPostRepository();
    const response = await loginRepository.send(dataSend);
    userStore.setDataLogin(response);
  }

  private verifyData(dataSend: User) {
    if (!dataSend.user || !dataSend.pass) {
      throw new Error('Invalid post data');
    }
  }
}
