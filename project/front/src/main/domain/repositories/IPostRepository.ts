
export interface IPostRepository<T, R> {
  save(post: T): Promise<R>;

  send(post: T): Promise<R>;
}
