import { Write } from '../interfaces/Write';
import { Read } from '../interfaces/Reads';

// we imported all types from mongodb driver, to use in code
import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  public readonly _collection: Collection;
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async create(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult = await this._collection.insert(item);
    // throw new Error("Method not implemented.");
    return !!result.result.ok;
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
