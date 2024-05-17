import axios from 'axios';
import type {IPostRepository} from "~/src/main/domain/repositories/IPostRepository";

export class PostRepository implements IPostRepository {
    async save(post) {
        try {
            const response = await axios.post('http://api.mywebsite.com/posts', post);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}