import { Module } from '@nestjs/common';
import { WordleService } from './wordle.service';
import { WordleController } from './wordle.controller';

@Module({
  controllers: [WordleController],
  providers: [WordleService],
})
export class WordleModule {}
