import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchema } from "../../schema/article.schema";
import { NavSchema } from "../../schema/nav.schema";
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { ArticleService } from "../../service/article/article.service";
import { NavService } from "../../service/nav/nav.service";
import { NewsController } from './controller/news/news.controller';
import { NavController } from './controller/nav/nav.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Article",
        schema: ArticleSchema,
        collection: 'article'
      },
      {
        name: "Nav",
        schema: NavSchema,
        collection: 'nav'
      }
    ]),
  ],
  controllers: [UserController, NewsController, NavController],
  providers: [UserService, ArticleService, NavService],
  exports: [UserService],
})
export class AdminModule {}
