import { Controller, Get, Render, Request } from "@nestjs/common";
import { UserService } from '../../service/user/user.service';

@Controller('admin/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('user')
  index(@Request() req) {
    return {
      username: req.signedCookies.username,
      userList: this.userService.getAll(),
    };
  }
}
