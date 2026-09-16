import { PenukaranService } from './penukaran_point.service';
import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';
export declare class PenukaranController {
    private readonly penukaranService;
    constructor(penukaranService: PenukaranService);
    create(createPenukaranDto: CreatePenukaranDto): import(".prisma/client").Prisma.Prisma__PenukaranClient<{
        id: number;
        kategoriId: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        kategori: {
            id: number;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
            foto: string;
        };
        hadiah: {
            id: number;
            foto: string;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
        };
    } & {
        id: number;
        kategoriId: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PenukaranClient<({
        kategori: {
            id: number;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
            foto: string;
        };
        hadiah: {
            id: number;
            foto: string;
            nama_hadiah: string;
            poin_dibutuhkan: number;
            stock: number;
        };
    } & {
        id: number;
        kategoriId: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePenukaranDto: UpdatePenukaranDto): import(".prisma/client").Prisma.Prisma__PenukaranClient<{
        id: number;
        kategoriId: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PenukaranClient<{
        id: number;
        kategoriId: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        hadiahId: number;
        poin_terpakai: number;
        sisa_point: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
