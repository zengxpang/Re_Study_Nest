import {
  Contains,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
  Max,
  Min,
} from 'class-validator';

export class HDto {
  @Length(2, 10, {
    message({ targetName, property, value, constraints }) {
      return `${targetName} 类的 ${property} 属性的值 ${value} 不满足约束: ${constraints}`;
    },
  })
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  // 是否是域名
  @IsFQDN()
  site: string;
}
