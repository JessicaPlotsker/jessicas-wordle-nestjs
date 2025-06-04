import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordleModule } from './wordle/wordle.module';
import { WordleService } from './wordle/wordle.service';

@Module({
  imports: [WordleModule],
  controllers: [AppController],
  providers: [AppService, WordleService],
})
export class AppModule {}
