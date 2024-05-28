import { IsInt } from 'class-validator';

export class GDto {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: string[];
}
