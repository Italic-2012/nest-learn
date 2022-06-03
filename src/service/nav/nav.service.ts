import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class NavService {
  constructor(@InjectModel('Nav') private navService) {}

  async findAll(params = {}) {
    return this.navService.find(params).exec();
  }
}
