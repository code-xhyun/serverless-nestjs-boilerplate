import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import { TypeOrmConfigService } from './core/config/typeorm.service';
import * as path from 'path';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      inject: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    BookModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
