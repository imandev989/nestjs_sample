import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      username: 'iman',
    },
    {
      id: 2,
      username: 'Hossein',
    },
    {
      id: 3,
      username: 'morteza',
    },
  ];

  getAll(): object {
    return {
      data: this.users,
      statusCode: 200,
      message: 'Get All users',
    };
  }

  getById(id: number): object {
    let findUser = null;
    for (const user of this.users) {
      if (user.id == id) findUser = user;
    }
    return {
      data: findUser,
      statusCode: 200,
      message: 'Get User!',
    };
  }

  createUser(createUserDto: CreateUserDto): object {
    if (createUserDto) {
      this.users.push(createUserDto);
    }
    return {
      data: this.users,
      statusCode: 200,
      message: 'created user!',
    };
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    let findUser = null;
    for (const user of this.users) {
      if (user.id == id) findUser = user;
    }
    if (findUser) {
      findUser.username = updateUserDto.username;
      return {
        data: findUser,
        statusCode: 200,
        message: 'user Update!',
      };
    } else
      return {
        updateUserDto: null,
        statusCode: 404,
        message: 'User not found!',
      };
  }
  deleteUser(id: number): object {
    const newUser: object[] = [];
    for (const user of this.users) {
      if (user.id !== id) newUser.push(user);
    }
    return {
      data: newUser,
      statusCode: 200,
      message: 'user deleted!',
    };
  }
}
