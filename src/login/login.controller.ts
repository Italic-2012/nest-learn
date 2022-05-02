import { Body, Controller, Get, Post, Render, Response, UsePipes } from '@nestjs/common';
import * as Joi from 'joi';
import { LoginPipe } from 'src/pipe/login.pipe';

const schema = Joi.object().keys({
  username: Joi.string().min(4).max(8).required(),
  password: Joi.string().min(4).max(7).required(),
});

@Controller('login')
export class LoginController {
  @Get()
  @Render('login')
  index() {
    return '';
  }

  @Post('cookie')
  @UsePipes(new LoginPipe(schema))
  setCookie(@Body() body, @Response() res) {
    if (body.error) {
      return res.send({ code: 10001, message: body.error });
    }
    if (body.username === '13120515752' && body.password === 'Fs123456') {
      res.cookie('username', 'zhangsan', {
        expires: new Date(Date.now() + 1000 * 60),
        httpOnly: true,
        signed: true,
      });
      res.redirect('/user');
      return;
    }
    res.send({ code: 401, message: '用户名或密码错误' });
  }
}
