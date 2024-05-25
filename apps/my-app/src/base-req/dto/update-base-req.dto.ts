import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseReqDto } from './create-base-req.dto';

export class UpdateBaseReqDto extends PartialType(CreateBaseReqDto) {}
