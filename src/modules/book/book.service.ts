import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService extends TypeOrmCrudService<Book> {
  constructor(@InjectRepository(Book) repo) {
    super(repo);
  }
}
