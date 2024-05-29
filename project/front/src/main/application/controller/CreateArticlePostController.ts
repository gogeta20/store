import { CreateArticlePostUseCase } from '../useCase/CreateArticlePostUseCase.js';
import type { Article } from "~/src/main/domain/entity/Article";

export default {
  async send(dataSend: Article) {
    const createPostUseCase = new CreateArticlePostUseCase();

    try {
      await createPostUseCase.execute(dataSend);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
};
