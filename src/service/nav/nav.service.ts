import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Nav, NavAdd } from "../../interface/nav.interface";

@Injectable()
export class NavService {
  constructor(@InjectModel('Nav') private navModel) {}

  /**
   * 查询
   * @param params
   * @param fields
   */
  async findAll(params: Partial<Nav> = {}, fields?: string) {
    return this.navModel.find(params, fields).exec();
  }

  /**
   * 新增
   * @param params
   */
  async addNav(params: NavAdd) {
    const nav = new this.navModel(params)
    return await nav.save();
  }

  /**
   * 更新
   * @param where
   * @param params
   */
  async updateNav(where: { _id: string }, params: Partial<NavAdd>) {
    return await this.navModel.updateOne(where, params);
  }

  /**
   * 删除
   * @param where
   */
  async deleteNav(where: { _id: string }) {
    return await this.navModel.deleteOne(where);
  }
}
