import { HadiahService } from './hadiah.service';
import { CreateHadiahDto } from './dto/create-hadiah.dto';
import { UpdateHadiahDto } from './dto/update-hadiah.dto';
export declare class HadiahController {
    private readonly hadiahService;
    constructor(hadiahService: HadiahService);
    create(createHadiahDto: CreateHadiahDto): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
        foto: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        penukaran: {
            poin_terpakai: number;
            sisa_point: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            kategoriId: number;
            hadiahId: number;
        }[];
    } & {
        id: number;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
        foto: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HadiahClient<({
        penukaran: {
            poin_terpakai: number;
            sisa_point: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            kategoriId: number;
            hadiahId: number;
        }[];
    } & {
        id: number;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
        foto: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateHadiahDto: UpdateHadiahDto): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
        foto: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
        foto: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
