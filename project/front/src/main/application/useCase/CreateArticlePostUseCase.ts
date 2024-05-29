import { ArticlePostRepository } from '../../infrastructure/repositories/ArticlePostRepository.js';
import type { Article } from "~/src/main/domain/entity/Article";

export class CreateArticlePostUseCase {

  async execute(dataSend: Article) {
    const articleRepository = new ArticlePostRepository();

    this.verifyData(dataSend);

    await articleRepository.save(dataSend);
  }

  private verifyData(dataSend: Article) {
    if (
      !dataSend.title ||
      !dataSend.tags ||
      !dataSend.author ||
      !dataSend.images ||
      !dataSend.content
    ) {
      throw new Error('Invalid post data');
    }
  }
}
