import { Test, TestingModule } from '@nestjs/testing';
import { PenukaranPointService } from './penukaran_point.service';

describe('PenukaranPointService', () => {
  let service: PenukaranPointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenukaranPointService],
    }).compile();

    service = module.get<PenukaranPointService>(PenukaranPointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
