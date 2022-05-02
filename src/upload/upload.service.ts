import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { createWriteStream } from 'fs';

@Injectable()
export class UploadService {
  /**
   * 上传文件到public/upload目录下
   * @param files
   */
  upload(files: any[]) {
    const uploadPath: string = join(__dirname, '../..', 'public/upload');
    for (const file of files) {
      createWriteStream(
        `${uploadPath}/${Date.now()}-${file.originalname}`,
      ).write(file.buffer);
    }
    return {
      code: 0,
      success: true,
      result: true,
    };
  }
}
