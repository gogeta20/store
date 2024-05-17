import { Post } from '../entity/Post';

export interface IPostRepository {
    save(post: Post): Promise<Post>;
    // Puedes agregar más métodos según se requiera
}