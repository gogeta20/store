import type {IPostRepository} from "~/src/main/domain/repositories/IPostRepository";
import type {Article} from "~/src/main/domain/entity/Article";
import {api} from "~/src/core/http/Api";

export class PostRepository implements IPostRepository {
    async save(dataSend: Article) {
        try {
            const response = await api.post('new-post', dataSend);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
