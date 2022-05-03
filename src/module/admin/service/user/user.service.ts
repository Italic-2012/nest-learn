import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAll() {
    return [
      { username: '张三', age: 23 },
      { username: '李四', age: 23 },
      { username: '账务', age: 23 },
      { username: '王二麻', age: 23 },
    ];
  }
}
