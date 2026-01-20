import { Injectable } from '@nestjs/common';
import { CreateCetegoryDto } from './dto/create-cetegory.dto';
import { UpdateCetegoryDto } from './dto/update-cetegory.dto';

@Injectable()
export class CetegoryService {
  create(createCetegoryDto: CreateCetegoryDto) {
    return 'This action adds a new cetegory';
  }

  findAll() {
    return `This action returns all cetegory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cetegory`;
  }

  update(id: number, updateCetegoryDto: UpdateCetegoryDto) {
    return `This action updates a #${id} cetegory`;
  }

  remove(id: number) {
    return `This action removes a #${id} cetegory`;
  }
}
