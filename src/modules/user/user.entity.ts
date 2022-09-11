import { BaseEntity } from '../../core/config/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  name: string;
}
