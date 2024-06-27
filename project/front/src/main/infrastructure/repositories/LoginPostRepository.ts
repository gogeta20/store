import type { IPostRepository } from "@/main/domain/repositories/IPostRepository";
import type { Response } from "@/main/domain/Response";
import { api } from "@/core/http/Api";
import type { AxiosError, AxiosResponse } from "axios";
import { UtilHelper } from "@/core/utilities/UtilHelper";
import Mock from "@/main/infrastructure/mock/LoginUser/LoginUserMock.json";

export class LoginPostRepository<T, Response> implements IPostRepository<T, Response> {

  async send(dataSend: T): Promise<Response> {
    return UtilHelper.checkEnvironment() ? await this.inMemory() : await this.backend(dataSend);
  }

  async inMemory(): Promise<Response> {
    await UtilHelper.wait(500);
    return Mock as Response;
  }

  async backend(dataSend: T): Promise<Response> {
    try {
      const resp = await api.post<T, AxiosResponse<Response>>('login', dataSend);
      if (resp.status === 200) return resp as Response
      throw new Error("Error al logearse");
    } catch (error: Error | any) {
      // console.log(error.status); // "Error"
      // console.log(error.statusText); // Muestra el seguimiento de la pila
      throw error;
    }
  }
}
