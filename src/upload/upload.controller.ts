import { Body, Controller, Get, Render, UploadedFiles, UseInterceptors, Response, Post } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get()
  @Render('upload')
  index() {
    return '';
  }

  @Post('files')
  @UseInterceptors(FilesInterceptor('datum'))
  files(@Body() body, @UploadedFiles() files) {
    return this.uploadService.upload(files);
  }
}
