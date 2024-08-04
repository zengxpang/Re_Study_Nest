import { PartialType } from '@nestjs/mapped-types';
import { CreateWsTestDto } from './create-ws-test.dto';

export class UpdateWsTestDto extends PartialType(CreateWsTestDto) {
  id: number;
}
