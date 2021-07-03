import { Controller, Get } from '@nestjs/common';
import { TaskDetailService } from './task-detail.service';

@Controller('tasks/:id/detail')
export class TaskDetailController {
  constructor(private readonly taskDetailService: TaskDetailService) {

  }

  @Get()
  findAll(): Promise<any> {
    return this.taskDetailService.findAll()
  }
}
