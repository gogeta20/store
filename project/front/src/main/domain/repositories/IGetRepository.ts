// import { Post } from '../entity/Article';

export interface IGetRepository<T> {
  get(parameters: T[]): Promise<T[]>;
}
