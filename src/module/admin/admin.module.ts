import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { LoginController } from './controller/login/login.controller';
import { NewsController } from './controller/news/news.controller';

@Module({
  controllers: [UserController, LoginController, NewsController],
  providers: [UserService],
  exports: [UserService],
})
export class AdminModule {}
