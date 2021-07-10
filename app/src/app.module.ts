import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' as 'mysql',
      host: 'localhost', // For run docker: mysql; For run normally with local mysql server: localhost
      port: 3306,
      username: 'root',
      password: '', // For run docker: root; For run normally with local mysql server: ''
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TaskModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}