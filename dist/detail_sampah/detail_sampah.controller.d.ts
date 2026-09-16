import { DetailSetoranService } from './detail_sampah.service';
import { CreateDetailSetoranDto } from './dto/create-detail_sampah.dto';
import { UpdateDetailSetoranDto } from './dto/update-detail_sampah.dto';
export declare class DetailSetoranController {
    private readonly detailSetoranService;
    constructor(detailSetoranService: DetailSetoranService);
    create(createDetailSetoranDto: CreateDetailSetoranDto): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<{
        berat_kg: number;
        sub_totalPoint: number;
        id: number;
        setoranId: number;
        kategoriId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        setoran: {
            id: number;
            nasabahId: number;
            adminId: number;
            userId: number;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        };
        kategori: {
            id: number;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
            foto: string;
        };
    } & {
        berat_kg: number;
        sub_totalPoint: number;
        id: number;
        setoranId: number;
        kategoriId: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<({
        setoran: {
            id: number;
            nasabahId: number;
            adminId: number;
            userId: number;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        };
        kategori: {
            id: number;
            nama_kategori: string;
            harga_perKilo: number;
            poin_perKilo: number;
            jenis_sampaj: import(".prisma/client").$Enums.Jenis;
            foto: string;
        };
    } & {
        berat_kg: number;
        sub_totalPoint: number;
        id: number;
        setoranId: number;
        kategoriId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateDetailSetoranDto: UpdateDetailSetoranDto): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<{
        berat_kg: number;
        sub_totalPoint: number;
        id: number;
        setoranId: number;
        kategoriId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DetailSetoranClient<{
        berat_kg: number;
        sub_totalPoint: number;
        id: number;
        setoranId: number;
        kategoriId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
