import { PostRepository } from '../../infrastructure/repositories/PostRepository.js';

export class CreatePostUseCase {
    async execute(postData) {
        const postRepository = new PostRepository();

        if (!postData.title || !postData.content) {
            throw new Error('Invalid post data');
        }

        // Creación del post y validación de los datos
        const post = {
            title: postData.title,
            content: postData.content,
            // Añade aquí el resto de las propiedades
        };

        await postRepository.save(post);
    }
}