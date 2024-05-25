import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { TheDynamicService } from './the-dynamic.service';
import { CreateTheDynamicDto } from './dto/create-the-dynamic.dto';
import { UpdateTheDynamicDto } from './dto/update-the-dynamic.dto';

@Controller('the-dynamic')
export class TheDynamicController {
  constructor(
    private readonly theDynamicService: TheDynamicService,
    @Inject('CONFIG_OPTIONS')
    private readonly configOptions: Record<string, any>,
  ) {}

  @Post()
  create(@Body() createTheDynamicDto: CreateTheDynamicDto) {
    return this.theDynamicService.create(createTheDynamicDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.theDynamicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theDynamicService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTheDynamicDto: UpdateTheDynamicDto,
  ) {
    return this.theDynamicService.update(+id, updateTheDynamicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theDynamicService.remove(+id);
  }
}
