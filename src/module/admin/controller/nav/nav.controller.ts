import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { NavService } from "../../../../service/nav/nav.service";

@Controller('admin/nav')
export class NavController {
  constructor(private navService: NavService) {}

  @Get()
  async index(@Query() params) {
    console.log(params, 'params')
    return await this.navService.findAll(params);
  }

  @Post('add')
  async add(@Body() data) {
    return await this.navService.addNav(data);
  }

  @Post('delete')
  async delete(@Body() params) {
    return await this.navService.deleteNav(params)
  }
}
