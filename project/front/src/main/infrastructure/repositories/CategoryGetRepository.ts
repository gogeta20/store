import type { Article } from '~/src/main/domain/entity/Article';
import type { IGetRepository } from '../../domain/repositories/IGetRepository';
import { api } from "@/core/http/Api";

class CategoryGetRepository implements IGetRepository<[]> {
  async get(parameters: []): Promise<[]> {
    // async get(dataSend) {
    try {
      const response = await api.get('new-post', { params: parameters });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
