import { CreateArticlePostUseCase } from '../useCase/CreateArticlePostUseCase.js';
import type { Article } from "~/src/main/domain/entity/Article";
const toastStore = toastAppStore();

export default {
  async send(dataSend: Article) {
    const createPostUseCase = new CreateArticlePostUseCase();

    try {
      await createPostUseCase.execute(dataSend);
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
