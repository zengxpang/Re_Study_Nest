import { Injectable } from '@nestjs/common';
import { CreateWsTestDto } from './dto/create-ws-test.dto';
import { UpdateWsTestDto } from './dto/update-ws-test.dto';

@Injectable()
export class WsTestService {
  create(createWsTestDto: CreateWsTestDto) {
    return 'This action adds a new wsTest';
  }

  findAll() {
    return `This action returns all wsTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wsTest`;
  }

  update(id: number, updateWsTestDto: UpdateWsTestDto) {
    return `This action updates a #${id} wsTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} wsTest`;
  }
}
