import { Module } from '@nestjs/common';
import { CetegoryService } from './cetegory.service';
import { CetegoryController } from './cetegory.controller';

@Module({
  controllers: [CetegoryController],
  providers: [CetegoryService],
})
export class CetegoryModule {}
