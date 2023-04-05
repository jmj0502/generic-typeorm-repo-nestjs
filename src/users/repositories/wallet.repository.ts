import { UserWallet } from '../entities/wallet';
import { BaseRepository } from '../../shared/services/base.servive';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class WalletRepository extends BaseRepository<UserWallet> {
  constructor(
    @InjectRepository(UserWallet) repository: Repository<UserWallet>,
  ) {
    super(repository);
  }
}
