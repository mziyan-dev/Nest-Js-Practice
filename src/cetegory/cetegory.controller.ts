import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CetegoryService } from './cetegory.service';
import { CreateCetegoryDto } from './dto/create-cetegory.dto';
import { UpdateCetegoryDto } from './dto/update-cetegory.dto';

@Controller('cetegory')
export class CetegoryController {
  constructor(private readonly cetegoryService: CetegoryService) {}

  @Post()
  create(@Body() createCetegoryDto: CreateCetegoryDto) {
    return this.cetegoryService.create(createCetegoryDto);
  }

  @Get()
  findAll() {
    return this.cetegoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cetegoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCetegoryDto: UpdateCetegoryDto) {
    return this.cetegoryService.update(+id, updateCetegoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cetegoryService.remove(+id);
  }
}
