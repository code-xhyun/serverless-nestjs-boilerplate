import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConnectionManager, getConnectionManager } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';
import { join } from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const connectionManager: ConnectionManager = getConnectionManager();
    let options: any;
    console.log(join(__dirname, '../../modules/**/*.entity.{ts,js}'));
    console.log(__dirname + '/../entity/**.entity{.ts,.js}');
    if (connectionManager.has('default')) {
      options = connectionManager.get('default').options;
      await connectionManager.get('default').close();
    } else {
      options = {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: parseInt(process.env.MYSQL_PORT ?? '3306', 10),
        entities: [join(__dirname, '../../modules/**/*.entity.{ts,js}')],
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
        logging: 'all',
      } as TypeOrmModuleOptions;
      console.log(options);
    }
    return options;
  }
}

