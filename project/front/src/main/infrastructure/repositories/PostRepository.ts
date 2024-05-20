import axios from 'axios';
import type {IPostRepository} from "~/src/main/domain/repositories/IPostRepository";
import type {Post} from "~/src/main/domain/entity/Post";
import {api} from "~/src/core/http/Api";

export class PostRepository implements IPostRepository {
    async save(post: Post) {
        try {
            // const response = await axios.post('http://api.mywebsite.com/posts', post);
            const response = await api.post('new-post', post);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}