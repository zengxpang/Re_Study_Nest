import { Injectable } from '@nestjs/common';
import { CreateBaseReqDto } from './dto/create-base-req.dto';
import { UpdateBaseReqDto } from './dto/update-base-req.dto';

@Injectable()
export class BaseReqService {
  create(createBaseReqDto: CreateBaseReqDto) {
    return 'This action adds a new baseReq';
  }

  findAll() {
    return `This action returns all baseReq`;
  }

  findOne(id: number) {
    return `received id=${id}`;
  }

  update(id: number, updateBaseReqDto: UpdateBaseReqDto) {
    return `This action updates a #${id} baseReq`;
  }

  remove(id: number) {
    return `This action removes a #${id} baseReq`;
  }
}
