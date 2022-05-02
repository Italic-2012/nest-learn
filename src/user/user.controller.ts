import { Body, Controller, Get, Post, Query, Render, Request } from '@nestjs/common';
import { ArticleService } from 'src/article/article.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userSerice: UserService,
    private readonly articleService: ArticleService,
  ) {}

  @Get()
  @Render('user')
  index(@Request() req) {
    console.log(req.signedCookies, 'req.signedCookies');
    return {
      username: req.signedCookies.username,
      userList: this.userSerice.findAll(),
      articleList: this.articleService.allArticle(),
    };
  }

  @Get('add')
  add(@Query() params) {
    return params;
  }

  @Post('edit')
  edit(@Body() params) {
    return params;
  }
}
