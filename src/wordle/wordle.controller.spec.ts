import { Test, TestingModule } from '@nestjs/testing';
import { WordleController } from './wordle.controller';
import { WordleService } from './wordle.service';

describe('WordleController', () => {
  let controller: WordleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordleController],
      providers: [WordleService],
    }).compile();

    controller = module.get<WordleController>(WordleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
