/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WordleService } from './wordle.service';
import { CreateWordleDto } from './dto/create-wordle.dto';
// import { UpdateWordleDto } from './dto/update-wordle.dto';

@Controller('wordle')
export class WordleController {
  constructor(private readonly wordleService: WordleService) {}

  // @Post()
  // create(@Body() createWordleDto: CreateWordleDto) {
  //   return this.wordleService.create(createWordleDto);
  // }

  @Get()
  findAll() {
    return this.wordleService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.wordleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWordleDto: UpdateWordleDto) {
  //   return this.wordleService.update(+id, updateWordleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.wordleService.remove(+id);
  // }
}
