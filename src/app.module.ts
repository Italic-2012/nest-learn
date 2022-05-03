import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitMiddleware } from './middleware/init.middleware';
import { ApiModule } from './module/api/api.module';
import { AdminModule } from './module/admin/admin.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [ApiModule, AdminModule, DefaultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(InitMiddleware).forRoutes('*');
  }
}
