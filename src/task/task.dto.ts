import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Task } from './task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @MaxLength(30)
  @IsString()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  isDone: boolean;

  toEntity(): Task {
    let task: Task = new Task();
    task.name = this.name;
    task.description = this.description;
    task.isDone = this.isDone;

    return task;
  }
}
