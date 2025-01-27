import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
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

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  getById(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({ id: id })
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser)
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
