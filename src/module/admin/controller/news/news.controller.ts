import { Controller, Get } from '@nestjs/common';
import { ArticleService } from "../../../../service/article/article.service";

@Controller('admin/news')
export class NewsController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async index() {
    return await this.articleService.findAll();
  }
}
