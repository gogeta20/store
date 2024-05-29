import { Post } from '../entity/Article';

export interface IPostRepository {
    save(post: Post): Promise<Post>;
}
