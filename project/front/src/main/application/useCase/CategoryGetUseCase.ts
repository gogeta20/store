import { CategoryGetRepository } from '../../infrastructure/repositories/CategoryGetRepository.js';
// import type { Article } from "@/main/domain/entity/Article";

export class CategoryGetUseCase {

  async execute(dataSend) {
    const repository = new CategoryGetRepository();

    this.verifyData(dataSend);

    await repository.get(dataSend);
  }

  private verifyData(dataSend) {
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
