export interface Write<T> {
  find(item: T): Promise<T[]>;
  findOne(id: string): Promise<T>;
}
