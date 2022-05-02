import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  @Get()
  @Render('register')
  register() {
    return { name: '注册' };
  }
  @Post()
  index(@Body() params, @Response() res) {
    console.log(params, 'params');
    res.redirect('/user');
  }
}
