import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  index() {
    return '我是news';
  }

  @Get('edit')
  edit(@Query('id') params) {
    return params;
  }

  @Get(':id')
  add(@Param() params) {
    return params;
  }
}
