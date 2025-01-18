import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private name = 'Iman';
  getName(): string {
    return this.name;
  }
  getHello(): string {
    return 'Hello World!';
  }
  setName(newName: string): void {
    this.name = newName;
  }
}
