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
            foto: string;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
        };
    } & {
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        tanggal: Date;
        kategoriId: number;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
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
            foto: string;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
        };
    } & {
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        tanggal: Date;
        kategoriId: number;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
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
            foto: string;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
        };
    } & {
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        tanggal: Date;
        kategoriId: number;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePenukaranDto: UpdatePenukaranDto): Promise<{
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        tanggal: Date;
        kategoriId: number;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PenukaranClient<{
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        tanggal: Date;
        kategoriId: number;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
