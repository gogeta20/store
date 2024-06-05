import type { IPostRepository } from "~/src/main/domain/repositories/IPostRepository";
import type { Article } from "~/src/main/domain/entity/Article";
import { api } from "~/src/core/http/Api";

export class ArticlePostRepository implements IPostRepository {

  async save(dataSend: Article) {
    try {
      await api.post('new-post', dataSend);
    } catch (error) {
      throw error;
    }
  }

}
