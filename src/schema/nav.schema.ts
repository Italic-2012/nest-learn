/**
 * Author:hong.rong
 * Desc:导航schema
 * Date:2022-06-03
 */

import * as Mongoose from "mongoose";

export const NavSchema = new Mongoose.Schema({
  title: String,
  url: String,
  status: Number,
})
