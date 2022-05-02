import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AdminModule } from '../admin/admin.module';
import { ApiController } from './api.controller';

@Module({
  imports: [AdminModule], // 服务共享方式一: 使用导出的模块(exports)
  controllers: [ApiController],
  providers: [AppService], // 服务共享方式二: 通过providers注入共享服务
})
export class ApiModule {}
