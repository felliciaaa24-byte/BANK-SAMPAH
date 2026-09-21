import { PrismaService } from '../prisma/prisma.service';
import { CreateHadiahDto } from './dto/create-hadiah.dto';
import { UpdateHadiahDto } from './dto/update-hadiah.dto';
export declare class HadiahService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createHadiahDto: CreateHadiahDto): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        foto: string;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        penukaran: {
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            tanggal: Date;
            kategoriId: number;
            hadiahId: number;
            poin_terpakai: number;
            sisa_point: number;
        }[];
    } & {
        id: number;
        foto: string;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HadiahClient<({
        penukaran: {
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            tanggal: Date;
            kategoriId: number;
            hadiahId: number;
            poin_terpakai: number;
            sisa_point: number;
        }[];
    } & {
        id: number;
        foto: string;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateHadiahDto: UpdateHadiahDto): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        foto: string;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HadiahClient<{
        id: number;
        foto: string;
        nama_hadiah: string;
        poin_dibutuhkan: number;
        stock: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
