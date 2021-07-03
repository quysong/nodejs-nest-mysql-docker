import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskDetailService {
  constructor() {}

  async findAll (): Promise<any> {
    let result : any = {result: "get all task detail"};
    return await result;
  }
}
