import { Injectable } from '@nestjs/common';
import { WordleService } from './wordle/wordle.service';

@Injectable()
export class AppService {
  //add the wordle service here
  constructor(private readonly wordleService: WordleService) {}
  getHello() {
    // return 'Hello World!';
    //need to call the wordle service here
    const wordle = this.wordleService.findAll();
    console.log('wordle', wordle);
    return wordle;
  }
}
