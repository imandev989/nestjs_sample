import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  index(): object {
    return this.usersService.getAll()
  }

  @Get("/:id")
  get(@Param('id') id: string) {
    return this.usersService.getById(parseInt(id))
  }

  @Post()
  store(@Body() data: object) {
    return this.usersService.createUser(data)
  }
}
