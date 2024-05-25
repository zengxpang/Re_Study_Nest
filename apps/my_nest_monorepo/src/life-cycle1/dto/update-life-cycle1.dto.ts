import { PartialType } from '@nestjs/mapped-types';
import { CreateLifeCycle1Dto } from './create-life-cycle1.dto';

export class UpdateLifeCycle1Dto extends PartialType(CreateLifeCycle1Dto) {}
