/**
 * Author:hong.rong
 * Desc:文章表schema
 * Date:2022-06-03
 */

import * as Mongoose from "mongoose";

export const ArticleSchema = new Mongoose.Schema({
  title: String,
  author: String,
  keywords: String,
  content: String,
  status: Number,
})
