import { Test, TestingModule } from '@nestjs/testing';
import { DetailSampahService } from './detail_sampah.service';

describe('DetailSampahService', () => {
  let service: DetailSampahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailSampahService],
    }).compile();

    service = module.get<DetailSampahService>(DetailSampahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
