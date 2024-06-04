import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AService } from './a.service';
import { CreateADto } from './dto/create-a.dto';
import { UpdateADto } from './dto/update-a.dto';

@Controller('a')
export class AController {
  constructor(private readonly aService: AService) {}

  @Post()
  create(@Body() createADto: CreateADto) {
    return this.aService.create(createADto);
  }

  @Get()
  findAll() {
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
