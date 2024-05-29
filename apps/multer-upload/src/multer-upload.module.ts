import { Module } from '@nestjs/common';
import { MulterUploadController } from './multer-upload.controller';
import { MulterUploadService } from './multer-upload.service';

@Module({
  imports: [],
  controllers: [MulterUploadController],
  providers: [MulterUploadService],
})
export class MulterUploadModule {}
