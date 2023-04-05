import { UserService } from './../services/user.service';
import { UserData, WalletData } from './../dto/user.data';
import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  public constructor(private readonly userService: UserService) {}

  @Post('')
  public async createUser(@Body() userData: UserData) {
    return this.userService.createUser(userData);
  }

  @Get('')
  public async getUsers() {
    return this.userService.getUsers();
  }

  @Post('/wallet')
  public async createWallet(@Body() walletData: WalletData) {
    return await this.userService.createWallet(walletData);
  }
}
