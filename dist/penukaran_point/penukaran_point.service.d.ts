import { PrismaService } from '../prisma/prisma.service';
import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';
export declare class PenukaranService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPenukaranDto: CreatePenukaranDto, userId: number): Promise<{
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
        hadiah: {
            id: number;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
            foto: string;
        };
    } & {
        poin_terpakai: number;
        sisa_point: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        kategoriId: number;
        hadiahId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
        hadiah: {
            id: number;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
            foto: string;
        };
    } & {
        poin_terpakai: number;
        sisa_point: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        kategoriId: number;
        hadiahId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PenukaranClient<({
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
        hadiah: {
            id: number;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
            foto: string;
        };
    } & {
        poin_terpakai: number;
        sisa_point: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        kategoriId: number;
        hadiahId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePenukaranDto: UpdatePenukaranDto): Promise<{
        poin_terpakai: number;
        sisa_point: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        kategoriId: number;
        hadiahId: number;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PenukaranClient<{
        poin_terpakai: number;
        sisa_point: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        kategoriId: number;
        hadiahId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
