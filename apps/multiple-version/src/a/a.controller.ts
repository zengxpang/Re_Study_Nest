import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { AService } from './a.service';
import { CreateADto } from './dto/create-a.dto';
import { UpdateADto } from './dto/update-a.dto';

@Controller({
  version: VERSION_NEUTRAL, // 所有版本都会匹配到这个控制器，不传也会
  path: 'a',
})
export class AController {
  constructor(private readonly aService: AService) {}

  @Post()
  create(@Body() createADto: CreateADto) {
    return this.aService.create(createADto);
  }

  // // 但是现在因为从上到下匹配，版本 2 的接口不起作用了,所以版本2要在1上面
  // @Version('2')
  // @Get()
  // findAll2() {
  //   return this.aService.findAll() + 'version2';
  // }

  @Get()
  findAll() {
    console.log('version other');
    return this.aService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateADto: UpdateADto) {
    return this.aService.update(+id, updateADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aService.remove(+id);
  }
}
