import { AnyObject, FilterQuery, Model, ProjectionType, QueryOptions } from "mongoose";

export class BaseRepository<T> {
  
    constructor(protected readonly model: Model<T> ) {
        
    }
  
    async find(filter: FilterQuery<T | any>, projection?: any): Promise<T[]> {
      return this.model.find(filter, projection);
    }
  
    async findById(
      id: string,
      projection?: ProjectionType<T>,
      options?: QueryOptions<T>,
    ): Promise<T> {
      return this.model.findById(id, projection, options);
    }
  
    async findOne(
      filter?: FilterQuery<T>,
      projection?: ProjectionType<T>,
      options?: QueryOptions<T>,
    ): Promise<T> {
      return this.model.findOne(filter, projection, options);
    }
  
    async create(doc: T | AnyObject ): Promise<T> {
      return this.model.create(doc);
    }
    
  }