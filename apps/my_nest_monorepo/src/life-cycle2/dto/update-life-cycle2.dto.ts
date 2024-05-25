import { PartialType } from '@nestjs/mapped-types';
import { CreateLifeCycle2Dto } from './create-life-cycle2.dto';

export class UpdateLifeCycle2Dto extends PartialType(CreateLifeCycle2Dto) {}
