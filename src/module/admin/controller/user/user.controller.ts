import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';

@Controller('admin/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  index() {
    return this.userService.getUserInfo();
  }
}
