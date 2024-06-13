import type { IPostRepository } from "~/src/main/domain/repositories/IPostRepository";
import type { User } from "~/src/main/domain/entity/User";
import { api } from "~/src/core/http/Api";


//TODO: aqui quedamos

export class LoginPostRepository implements IPostRepository {

  async save(dataSend: User) {
    try {
      await api.post('login', dataSend);
    } catch (error) {
      throw error;
    }
  }
}
