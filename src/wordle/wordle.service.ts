/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateWordleDto } from './dto/create-wordle.dto';
// import { UpdateWordleDto } from './dto/update-wordle.dto';

@Injectable()
export class WordleService {
  // create(createWordleDto: CreateWordleDto) {
  //   return 'This action adds a new wordle';
  // }

  findAll() {
    // return `This action returns all wordle`;
    const wordle = 'fight';
    const word = 'party';
    const splitWordle = wordle.split('');
    const splitWord = word.split('');
    console.log('splitWord', splitWord);
    console.log('splitWordle', splitWordle);
    const result = splitWordle.map((letter, index) => {
      if (letter === splitWord[index]) {
        return 'green';
      } else if (splitWord.includes(letter)) {
        return 'yellow';
      } else {
        return 'grey';
      }
    });
    console.log('result', result);
    /**
     * whats the alg?
     * 2 words, split into arrays
     * first check each values against each other to see if its the same
     * then check the 2nd word (guessed word) with the includes to see if any words are there but in wrong order
     */

    /**
     * the best way would be to return an object with the word and the result
     * also the best use of these services would be a start button (can be a post request)
     * that triggers a get req that will ask openai for a 5 letter word - can add a difficulty level
     * then the user can guess the word and post it, from there we call the above alg that checks it
     * then we send back the results and the word - would need to check that the word the user sends is an actual
     * word and also that they have not already guessed that word
     */
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} wordle`;
  // }

  // update(id: number, updateWordleDto: UpdateWordleDto) {
  //   return `This action updates a #${id} wordle`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} wordle`;
  // }
}
