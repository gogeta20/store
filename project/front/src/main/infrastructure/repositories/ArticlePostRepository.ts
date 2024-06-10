import type { IPostRepository } from "~/src/main/domain/repositories/IPostRepository";
import type { Article } from "~/src/main/domain/entity/Article";
import { api } from "~/src/core/http/Api";

export class ArticlePostRepository implements IPostRepository {

  async save(dataSend: Article) {
    try {
      const formData = new FormData();

      dataSend.files.forEach((file: string | Blob, index: any) => {
        formData.append(`files[${index}]`, file);
      });
      formData.append('images', JSON.stringify(dataSend.images));
      formData.append('title', dataSend.title);
      formData.append('tags', dataSend.tags);
      formData.append('author', dataSend.author);
      formData.append('category', dataSend.category[0].name);
      formData.append('content', dataSend.content);

      await api.post('new-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
