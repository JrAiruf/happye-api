import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeventService } from './hevent.service';
import { CreateHeventDto } from './dto/create-hevent.dto';
import { UpdateHeventDto } from './dto/update-hevent.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Hevent")
@Controller({
  version: '1',
  path: 'hevent'
})
export class HeventController {
  constructor(private readonly heventService: HeventService) { }

  @Post()
  create(@Body() createHeventDto: CreateHeventDto) {
    return this.heventService.create(createHeventDto);
  }

  @Get()
  findAll() {
    return "API IS RUNNING";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeventDto: UpdateHeventDto) {
    return this.heventService.update(+id, updateHeventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heventService.remove(+id);
  }
}
