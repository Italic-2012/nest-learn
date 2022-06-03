import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitMiddleware } from './middleware/init.middleware';
import { ApiModule } from './module/api/api.module';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [
    ApiModule,
    AdminModule,
    DefaultModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27018/koa'), // 配置数据库链接
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(InitMiddleware).forRoutes('*');
  }
}
