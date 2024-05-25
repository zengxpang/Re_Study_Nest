import { Injectable } from '@nestjs/common';
import { CreateTheDynamicDto } from './dto/create-the-dynamic.dto';
import { UpdateTheDynamicDto } from './dto/update-the-dynamic.dto';

@Injectable()
export class TheDynamicService {
  create(createTheDynamicDto: CreateTheDynamicDto) {
    return 'This action adds a new theDynamic';
  }

  findAll() {
    return `This action returns all theDynamic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theDynamic`;
  }

  update(id: number, updateTheDynamicDto: UpdateTheDynamicDto) {
    return `This action updates a #${id} theDynamic`;
  }

  remove(id: number) {
    return `This action removes a #${id} theDynamic`;
  }
}
