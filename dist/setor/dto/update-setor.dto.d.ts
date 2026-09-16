import { CreateSetoranDto } from './create-setor.dto';
import { STATUS } from '@prisma/client';
declare const UpdateSetoranDto_base: import("@nestjs/common").Type<Partial<CreateSetoranDto>>;
export declare class UpdateSetoranDto extends UpdateSetoranDto_base {
    status?: STATUS;
}
export {};
