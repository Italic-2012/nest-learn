import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UserService } from '../admin/service/user/user.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly userService: UserService,
    private readonly appService: AppService,
  ) {}

  @Get()
  index() {
    return this.userService.getAll();
  }

  @Get('hello')
  hello() {
    return this.appService.getHello();
  }
}
