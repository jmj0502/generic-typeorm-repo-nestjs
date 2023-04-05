import { RootEntity } from '../../shared/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { UserWallet } from './wallet';

@Entity({ name: 'test_users' })
export class User extends RootEntity {
  @Column()
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @OneToMany(() => UserWallet, (userWallet) => userWallet.userId)
  wallets: UserWallet[];
}
