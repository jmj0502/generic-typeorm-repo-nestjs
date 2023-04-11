import { Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
  SaveOptions,
} from 'typeorm';
import { RootEntity } from '../entities/base.entity';

export class BaseRepository<T extends RootEntity> {
  constructor(protected readonly repository: Repository<T>) {}

  public async findOne(options: FindOneOptions<T>): Promise<T> {
    return await this.repository.findOne(options);
  }

  public async findMany(options: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  public async create(
    data: DeepPartial<T>,
    options: SaveOptions = {},
  ): Promise<T> {
    try {
      const record = await this.repository.create(data);
      const createdRecord = await this.repository.save(record);
      return createdRecord;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
