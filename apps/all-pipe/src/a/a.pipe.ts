import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class APipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('APipe...', value, metadata);
    return 'APipe...';
  }
}
