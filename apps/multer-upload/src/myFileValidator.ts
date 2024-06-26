import { FileValidator } from '@nestjs/common';

export class MyFileValidator extends FileValidator {
  constructor(options) {
    super(options);
  }

  isValid(file: Express.Multer.File): boolean | Promise<boolean> {
    return file.size <= 10 * 1024;
  }
  buildErrorMessage(file: Express.Multer.File): string {
    return `文件 ${file.originalname} 大小超出了 10k`;
  }
}
