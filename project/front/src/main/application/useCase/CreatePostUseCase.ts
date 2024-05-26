import { PostRepository } from '../../infrastructure/repositories/PostRepository.js';
import type {Article} from "~/src/main/domain/entity/Article";

export class CreatePostUseCase {

  async execute(dataSend: Article) {
    const postRepository = new PostRepository();

    this.verifyData(dataSend);

    await postRepository.save(dataSend);
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
