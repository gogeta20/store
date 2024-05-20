import { PostRepository } from '../../infrastructure/repositories/PostRepository.js';
import type {Post} from "~/src/main/domain/entity/Post";

export class CreatePostUseCase {
    async execute(postData: Post) {
        const postRepository = new PostRepository();

        if (!postData.title || !postData.content) {
            throw new Error('Invalid post data');
        }

        // Creación del post y validación de los datos
        const post = {
            title: postData.title,
            content: postData.content,
            author : postData.author,
            date : new Date(),
            images : postData.images,
            tags : postData.tags
        };

        await postRepository.save(post);
    }
}