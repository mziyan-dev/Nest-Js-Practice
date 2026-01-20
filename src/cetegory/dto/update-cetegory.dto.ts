import { PartialType } from '@nestjs/mapped-types';
import { CreateCetegoryDto } from './create-cetegory.dto';

export class UpdateCetegoryDto extends PartialType(CreateCetegoryDto) {}
