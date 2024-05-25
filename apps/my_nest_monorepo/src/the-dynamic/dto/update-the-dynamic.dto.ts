import { PartialType } from '@nestjs/mapped-types';
import { CreateTheDynamicDto } from './create-the-dynamic.dto';

export class UpdateTheDynamicDto extends PartialType(CreateTheDynamicDto) {}
