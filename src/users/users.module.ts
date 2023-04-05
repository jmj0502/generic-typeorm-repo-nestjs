import { UsersController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserWallet } from './entities/wallet';
import { WalletRepository } from './repositories/wallet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserWallet])],
  providers: [UserRepository, UserService, WalletRepository],
  exports: [],
  controllers: [UsersController],
})
export class UsersModule {}
