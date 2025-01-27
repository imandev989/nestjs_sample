import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'imaniman',
      database: 'user_manage',
      synchronize: true,
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'imaniman',
    //   database: 'user_manage',
    //   synchronize: true,
    //   entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
