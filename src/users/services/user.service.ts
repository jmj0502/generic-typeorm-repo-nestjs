import { UserData, WalletData } from './../dto/user.data';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { WalletRepository } from '../repositories/wallet.repository';

@Injectable()
export class UserService {
  public constructor(
    private readonly usersRepository: UserRepository,
    private readonly walletRepository: WalletRepository,
  ) {}

  public async createUser(userData: UserData) {
    return await this.usersRepository.create(userData);
  }

  public async getUsers() {
    return await this.usersRepository.findMany({ where: {} });
  }

  public async createWallet(walletData: WalletData) {
    const associatedUser = await this.usersRepository.findOne({
      where: { id: walletData.userId },
    });
    if (!associatedUser) {
      throw new NotFoundException('User not found!');
    }
    return await this.walletRepository.create({
      ...walletData,
      userId: associatedUser,
    });
  }
}
