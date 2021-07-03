import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service'
import { Task } from './task.entity'
import { CreateTaskDto } from './task.dto';


@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {

  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.taskService.findOne(params.id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() task: CreateTaskDto) {
    console.log(`task`, task);
    console.log(`rs`, task.toEntity())
    return this.taskService.create(task.toEntity());
  }

  @Put()
  update(@Body() task: Task) {
    return this.taskService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.taskService.delete(params.id);
  }
}
