import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RootEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
