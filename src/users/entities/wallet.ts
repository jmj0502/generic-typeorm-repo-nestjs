import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RootEntity } from '../../shared/entities/base.entity';
import { User } from './user';

@Entity({ name: 'user_wallet' })
export class UserWallet extends RootEntity {
  @Column({ type: 'float' })
  funds: number;

  @Column()
  currency: string;

  @ManyToOne(() => User, (user) => user.wallets)
  @JoinColumn({ name: 'user_id' })
  userId: User | null;
}
