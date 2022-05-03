import { Controller, Get } from "@nestjs/common";

@Controller('admin/news')
export class NewsController {
  @Get()
  index() {
    return '我是news';
  }
}
