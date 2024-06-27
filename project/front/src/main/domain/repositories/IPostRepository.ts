
export interface IPostRepository<T, R> {
  send(post: T): Promise<R>;
}
