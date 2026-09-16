import { Test, TestingModule } from '@nestjs/testing';
import { PenukaranPointController } from './penukaran_point.controller';
import { PenukaranPointService } from './penukaran_point.service';

describe('PenukaranPointController', () => {
  let controller: PenukaranPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenukaranPointController],
      providers: [PenukaranPointService],
    }).compile();

    controller = module.get<PenukaranPointController>(PenukaranPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
