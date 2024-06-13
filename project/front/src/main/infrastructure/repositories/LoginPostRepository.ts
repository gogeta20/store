import type { IPostRepository } from "~/src/main/domain/repositories/IPostRepository";
import type { User } from "~/src/main/domain/entity/User";
import type { Response } from "~/src/main/domain/Response";
import { api } from "~/src/core/http/Api";


export class LoginPostRepository<T, Response> implements IPostRepository<T, Response> {

  async send(dataSend: T): Promise<Response>
  {
    try {
      await api.post('login', dataSend);
      return {saveAs: true} as Response;
    } catch (error) {
      throw error;
    }
  }

  async save(id: T): Promise<Response> {
    return { saveAs: true } as Response;
  }
}
