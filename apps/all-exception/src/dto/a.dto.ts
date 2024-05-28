import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class ADto {
  @IsNotEmpty()
  @IsEmail({}, { message: '不是邮箱格式' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
