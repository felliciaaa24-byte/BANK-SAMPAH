import { SetoranService } from './setor.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
export declare class SetoranController {
    private readonly setoranService;
    constructor(setoranService: SetoranService);
    create(createSetoranDto: CreateSetoranDto, req: any): Promise<{
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        admin: {
            status: import(".prisma/client").$Enums.StatusAdmin;
            id: number;
            userId: number;
            nama_unit: string;
            nama_pengelola: string;
            telpon: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        detailSetoran: {
            id: number;
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        }[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number | null;
        userId: number;
    }>;
    findPengajuan(req: any): Promise<({
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        detailSetoran: ({
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
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        })[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number | null;
        userId: number;
    })[]>;
    approve(id: number, req: any): Promise<{
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        admin: {
            status: import(".prisma/client").$Enums.StatusAdmin;
            id: number;
            userId: number;
            nama_unit: string;
            nama_pengelola: string;
            telpon: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        detailSetoran: ({
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
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        })[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number | null;
        userId: number;
    }>;
    reject(id: number, req: any): Promise<{
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        admin: {
            status: import(".prisma/client").$Enums.StatusAdmin;
            id: number;
            userId: number;
            nama_unit: string;
            nama_pengelola: string;
            telpon: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        detailSetoran: ({
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
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        })[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number | null;
        userId: number;
    }>;
}
