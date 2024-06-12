import { LoginPostUseCase } from '../useCase/LoginPostUseCase';
import type { User } from "~/src/main/domain/entity/User";
const toastStore = toastAppStore();

export default {
  async send(dataSend: User) {
    const loginPostUseCase = new LoginPostUseCase();

    try {
      await loginPostUseCase.execute(dataSend);
      toastStore.onShowToast({
        title: "title test",
        message: 'test toast',
        type: "success",
        code: 200,
        life: 3000
      });
    } catch (error) {
      const er = error as Error;
      toastStore.onShowToast({
        title: er.name,
        message: er.message,
        type: "danger",
        code: 200,
        life: 3000
      });
      // throw error;
    }
  }
};
