import { KategoriService } from './kategori.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
export declare class KategoriController {
    private readonly kategoriService;
    constructor(kategoriService: KategoriService);
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
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
            setoranId: number;
        }[];
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
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__KategoriClient<({
        detailSetoran: {
            id: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
            setoranId: number;
        }[];
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
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateKategoriDto: UpdateKategoriDto): import(".prisma/client").Prisma.Prisma__KategoriClient<{
        id: number;
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__KategoriClient<{
        id: number;
        foto: string;
        nama_kategori: string;
        harga_perKilo: number;
        poin_perKilo: number;
        jenis_sampaj: import(".prisma/client").$Enums.Jenis;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
