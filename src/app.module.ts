import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { UserService } from './user/user.service';
import { ArticleService } from './article/article.service';
import { UploadService } from './upload/upload.service';
import { UploadController } from './upload/upload.controller';
import { InitMiddleware } from './middleware/init.middleware';
import { ApiModule } from './module/api/api.module';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [ApiModule, AdminModule, DefaultModule],
  controllers: [AppController, UserController, NewsController, LoginController, RegisterController, UploadController],
  providers: [AppService, UserService, ArticleService, UploadService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(InitMiddleware).forRoutes('*');
  }
}
