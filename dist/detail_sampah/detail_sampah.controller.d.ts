import { DetailSetoranService } from './detail_sampah.service';
import { CreateDetailSetoranDto } from './dto/create-detail_sampah.dto';
import { UpdateDetailSetoranDto } from './dto/update-detail_sampah.dto';
export declare class DetailSetoranController {
    private readonly detailSetoranService;
    constructor(detailSetoranService: DetailSetoranService);
    create(createDetailSetoranDto: CreateDetailSetoranDto): Promise<{
        setoran: {
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
        };
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
    } & {
        id: number;
        kategoriId: number;
        berat_kg: number;
        sub_totalPoint: number;
        setoranId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        setoran: {
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
        };
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
    } & {
        id: number;
        kategoriId: number;
        berat_kg: number;
        sub_totalPoint: number;
        setoranId: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<({
        setoran: {
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
        };
        kategori: {
            id: number;
            foto: string;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
        };
    } & {
        id: number;
        kategoriId: number;
        berat_kg: number;
        sub_totalPoint: number;
        setoranId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateDetailSetoranDto: UpdateDetailSetoranDto): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<{
        id: number;
        kategoriId: number;
        berat_kg: number;
        sub_totalPoint: number;
        setoranId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<{
        id: number;
        kategoriId: number;
        berat_kg: number;
        sub_totalPoint: number;
        setoranId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
