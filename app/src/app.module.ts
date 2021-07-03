import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' as 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TaskModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}