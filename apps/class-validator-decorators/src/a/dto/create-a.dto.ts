import {
  ArrayContains,
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotContains,
  Contains,
  IsAlphanumeric,
  IsArray,
  IsBoolean,
  IsDateString,
  IsDefined,
  IsDivisibleBy,
  IsEmail,
  IsHexColor,
  IsIn,
  IsNotEmpty,
  IsNotIn,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  Validate,
  ValidateIf,
} from 'class-validator';
import { MyValidator } from '../../my-validator';
import { MyContains } from '../../my-contains.decorator';

export class CreateADto {
  // @IsNotEmpty 检查值是不是 ''、undefined、null。
  // @IsNotEmpty({ message: 'name不能为空' })
  // @IsDefined 检查值是不是 undefined、null。
  @IsString({ message: 'name必须是字符串' })
  @IsEmail({}, { message: 'name必须是邮箱' })
  // @IsOptional()
  // @IsIn(['aaa@aa.com', 'bbb@bb.com'])
  @IsNotIn(['aaa@aa.com', 'bbb@bb.com'])
  @IsDefined() // 想传空字符串，就用这个装饰器
  name: string;

  // @IsArray()
  // @ArrayContains(['aaa'])
  // @ArrayNotContains(['bbb'])
  // @ArrayMinSize(2)
  // @ArrayMaxSize(5)
  // hobbies: string[];

  // @IsPositive 是必须是正数、@IsNegative 是必须是负数。
  @IsPositive()
  @Min(1)
  @Max(10)
  // @IsDivisibleBy 是必须被某个数整除。
  @IsDivisibleBy(2)
  ddd: number;

  @IsDateString()
  //  ISO 标准的日期字符串 new Date().toISOString() 2024-06-04T11:00:21.979Z
  eee: string;

  //@IsAlpha 检查是否只有字母
  //
  // @IsAlphanumeric 检查是否只有字母和数字
  //
  // @Contains 是否包含某个值
  @IsAlphanumeric()
  @Contains('aaa')
  fff: string;

  // 字符串可以通过 @MinLength、@MaxLength、@Length 来限制长度 @Length(2, 6)
  @MinLength(2)
  @MaxLength(6)
  ggg: string;

  //还可以校验颜色值的格式：@IsHexColor、@IsHSL、@IsRgbColor
  //
  // 校验 IP 的格式：@IsIP
  //
  // 校验端口： @IsPort
  //
  // 校验 JSON 格式 @IsJSON

  @IsBoolean()
  hhh: boolean;

  // 如果 hhh 传了 true，那就需要对 iii 做校验，否则不需要校验
  @ValidateIf((o) => o.hhh === true)
  @IsNotEmpty()
  @IsHexColor()
  iii: string;

  @Validate(MyValidator, [11, 22], {
    message: 'jjj 校验失败',
  })
  jjj: string;

  @MyContains('111', {
    message: 'jjj 必须包含 111',
  })
  jjj2: string;
}
