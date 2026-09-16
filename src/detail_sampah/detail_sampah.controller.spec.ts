import { Test, TestingModule } from '@nestjs/testing';
import { DetailSampahController } from './detail_sampah.controller';
import { DetailSampahService } from './detail_sampah.service';

describe('DetailSampahController', () => {
  let controller: DetailSampahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailSampahController],
      providers: [DetailSampahService],
    }).compile();

    controller = module.get<DetailSampahController>(DetailSampahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
