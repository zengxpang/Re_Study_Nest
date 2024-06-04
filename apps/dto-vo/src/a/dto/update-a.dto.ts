import { CreateADto } from './create-a.dto';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';
import { XxxDto } from './xxx.dto';
import {
  PartialType,
  PickType,
  OmitType,
  IntersectionType,
} from '@nestjs/mapped-types';

// import {
//   PartialType,
//   PickType,
//   OmitType,
//   IntersectionType,
// } from '@nestjs/swagger';

// extends PartialType(CreateADto)
export class UpdateADto extends IntersectionType(
  OmitType(CreateADto, ['age', 'email']),
  XxxDto,
) {
  // @IsNotEmpty()
  // @MinLength(4)
  // @MaxLength(20)
  // name: string;
  //
  // @IsNotEmpty()
  // @IsNumber()
  // age: number;
  //
  // @IsNotEmpty()
  // @IsBoolean()
  // sex: boolean;
  //
  // @IsNotEmpty()
  // @IsEmail()
  // email: string;
  //
  // hobbies: string[];
}
