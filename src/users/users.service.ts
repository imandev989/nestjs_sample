import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private users: any[] = [
    {
      id: 1,
      username: "iman"
    },
    {
      id: 2,
      username: "Hossein"
    },
    {
      id: 3,
      username: "morteza"
    },
  ]

  getAll(): object {
    return {
      data: this.users,
      statusCode: 200,
      message: "Get All users"
    }
  }

  getById(id: number): object {
    let findUser = null;
    for (const user of this.users) {
      if (user.id == id)
        findUser = user
    }
    return {
      data: findUser,
      statusCode: 200,
      message: "Get User!"
    }
  }

  createUser(data: object): object {
    if (data) {
      this.users.push(data)
    }
    return {
      data: this.users,
      statusCode: 200,
      message: "created user!"
    }
  }

}
