import { UserWallet } from './users/entities/wallet';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jmj0502',
      password: 'admin',
      database: 'test',
      entities: [User, UserWallet],
      synchronize: true,
    }),
    SharedModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
