import { BaseEntity } from '../../core/config/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class Book extends BaseEntity {
  @Column()
  name: string;
}
