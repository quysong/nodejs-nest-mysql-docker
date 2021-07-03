import { Module } from '@nestjs/common';
import { TaskDetailService } from './task-detail.service';
import { TaskDetailController } from './task-detail.controller';

@Module({
  providers: [TaskDetailService],
  controllers: [TaskDetailController]
})
export class TaskDetailModule {}
