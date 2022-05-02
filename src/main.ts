import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParse from 'cookie-parser';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 使用静态文件 'public' === join(__dirname, '..', 'public')
  app.useStaticAssets('public', { prefix: '/static/' });

  // 设置view文件目录
  app.setBaseViewsDir('views');
  // 设置view模板
  app.setViewEngine('ejs');

  // 使用cookie中间件
  app.use(cookieParse('shop-server'));

  // 使用自定义全局中间件
  app.use(logger);

  await app.listen(3000);
}
bootstrap();
