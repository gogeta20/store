import { CreatePostUseCase } from '../useCase/CreatePostUseCase.js';
import type {Article} from "~/src/main/domain/entity/Article";

export default {
    async createPost(dataSend: Article) {
        const createPostUseCase = new CreatePostUseCase();

        try {
            await createPostUseCase.execute(dataSend);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};
