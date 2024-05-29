import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileSizePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    if (value.size > 10 * 1024) {
      throw new HttpException('文件大于10k', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
