import { CreatePostUseCase } from '../useCase/CreatePostUseCase.js';
import type {Post} from "~/src/main/domain/entity/Post";

export default {
    async createPost(postData: Post) {
        const createPostUseCase = new CreatePostUseCase();

        try {
            await createPostUseCase.execute(postData);

            // Añade aquí cualquier lógica adicional necesaria tras la creación del post, como notificaciones al usuario

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};
