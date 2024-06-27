import { LoginPostUseCase } from '@/main/application/useCase/LoginPostUseCase';
import type { User } from "@/main/domain/entity/User";
const toastStore = toastAppStore();

export default {
  async send(dataSend: User) {
    const loginPostUseCase = new LoginPostUseCase();

    try {
      await loginPostUseCase.execute(dataSend);
      toastStore.onShowToast({
        title: "Usuario logeado correctamente",
        message: '',
        type: "success",
        code: 200,
        life: 3000
      });
    } catch (error: Error | any) {
      toastStore.onShowToast({
        title: "Error en al intentar logearse",
        message: error.status,
        type: "danger",
        code: 200,
        life: 3000
      });
    }
  }
};
