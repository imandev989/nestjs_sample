import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHi(): string {
    return 'Hi!';
  }
}
