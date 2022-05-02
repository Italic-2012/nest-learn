import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo() {
    return { username: 'nick', age: 24 };
  }
}
