import { Test, TestingModule } from '@nestjs/testing';
import { JuiceController } from './juice.controller';

describe('JuiceController', () => {
  let controller: JuiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuiceController],
    }).compile();

    controller = module.get<JuiceController>(JuiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
