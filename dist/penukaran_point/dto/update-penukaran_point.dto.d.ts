import { CreatePenukaranDto } from './create-penukaran_point.dto';
import { STATUS } from '@prisma/client';
declare const UpdatePenukaranDto_base: import("@nestjs/common").Type<Partial<CreatePenukaranDto>>;
export declare class UpdatePenukaranDto extends UpdatePenukaranDto_base {
    status?: STATUS;
}
export {};
