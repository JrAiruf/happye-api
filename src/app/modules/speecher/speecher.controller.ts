import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeecherService } from './speecher.service';
import { CreateHeventSpeecherDto } from './dto/create-hevent-speecher.dto';
import { UpdateSpeecherDto } from './dto/update-speecher.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('speecher')
@ApiTags('Speecher')
export class SpeecherController {
  constructor(private readonly speecherService: SpeecherService) { }

  @Post()
  create(@Body() createSpeecherDto: CreateHeventSpeecherDto) {
    return this.speecherService.create(createSpeecherDto);
  }

  @Get()
  findAll() {
    return this.speecherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speecherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeecherDto: UpdateSpeecherDto) {
    return this.speecherService.update(+id, updateSpeecherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speecherService.remove(+id);
  }
}
