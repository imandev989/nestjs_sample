import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getname')
  getName(): string {
    return this.appService.getName();
  }
  @Post('setname')
  setName(): string {
    const msg: string = 'set name successfully';
    const new_name: string = 'Iman';
    this.appService.setName(new_name);
    return this.appService.getName();
  }
}
