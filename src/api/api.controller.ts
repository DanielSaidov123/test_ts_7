import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Bind,
  UploadedFile,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  create(@Body() createApiDto: CreateApiDto) {
    return this.apiService.create(createApiDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  @Bind(UploadedFile())
  uploadFile(file : File) {
    return this.apiService.upfile(file)
  }
}
