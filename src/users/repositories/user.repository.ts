import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, DeepPartial, SaveOptions } from 'typeorm';
import { BaseRepository } from '../../shared/services/base.servive';
import { User } from '../entities/user';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  /**
   * Creates and stores a new user entity.
   * @param data The data that will be the starting point for creating a user. 
   * @param options The save options.
   * @returns The newly created user.
   */
  override async create(
    data: DeepPartial<User>,
    options: SaveOptions = {},
  ): Promise<User> {
    console.log('Calling from son!');
    return await this.repository.save(data);
  }
}
