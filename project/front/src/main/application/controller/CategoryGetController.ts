import { CategoryGetUseCase } from '../useCase/CategoryGetUseCase.js';
// import type { Article } from "~/src/main/domain/entity/Article";

export default {
  async send(dataSend) {

    const getUseCase = new CategoryGetUseCase();

    try {
      await getUseCase.execute(dataSend);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
};
