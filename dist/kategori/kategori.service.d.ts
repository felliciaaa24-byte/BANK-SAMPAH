import { PrismaService } from '../prisma/prisma.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
export declare class KategoriService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createKategoriDto: CreateKategoriDto): import(".prisma/client").Prisma.Prisma__KategoriClient<{
        id: number;
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        detailSetoran: {
            id: number;
            berat_kg: number;
            sub_totalPoint: number;
            setoranId: number;
            kategoriId: number;
        }[];
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
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__KategoriClient<({
        detailSetoran: {
            id: number;
            berat_kg: number;
            sub_totalPoint: number;
            setoranId: number;
            kategoriId: number;
        }[];
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
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateKategoriDto: UpdateKategoriDto): import(".prisma/client").Prisma.Prisma__KategoriClient<{
        id: number;
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__KategoriClient<{
        id: number;
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
